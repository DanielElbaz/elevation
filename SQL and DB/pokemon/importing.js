const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:1234@127.0.0.1/pokemon')


function arr(val) {
    if (!val) return [];
    return Array.isArray(val) ? val : [val];
}

(async () => {
    try {

        const rawPath = path.join(__dirname, './poke_data.json');
        const raw = fs.readFileSync(rawPath, 'utf8');
        const data = JSON.parse(raw);

        await sequelize.authenticate();
        await sequelize.transaction(async (t) => {
            // 1) Types
            const types = [...new Set(data.map(p => p.type).filter(Boolean))];
            for (const typeName of types) {
                await sequelize.query(
                    `INSERT IGNORE INTO pokemon_type (type_name) VALUES (?)`,
                    { replacements: [typeName], transaction: t }
                );
            }

            // 2) Towns
            const townSet = new Set();
            for (const p of data) {
                for (const o of arr(p.ownedBy)) {
                    if (o?.town) townSet.add(o.town);
                }
            }
            for (const townName of townSet) {
                await sequelize.query(
                    `INSERT IGNORE INTO town (name) VALUES (?)`,
                    { replacements: [townName], transaction: t }
                );
            }

            // 3) Trainers (avec rattachement à town)
            for (const p of data) {
                for (const o of arr(p.ownedBy)) {
                    if (!o?.name) continue;
                    // town_id (peut être NULL)
                    let townId = null;
                    if (o.town) {
                        const [rows] = await sequelize.query(
                            `SELECT id FROM town WHERE name = ?`,
                            { replacements: [o.town], transaction: t }
                        );
                        townId = rows[0]?.id ?? null;
                    }
                    await sequelize.query(
                        `INSERT INTO trainer (name, town_id)
             VALUES (?, ?)
             ON DUPLICATE KEY UPDATE town_id = VALUES(town_id)`,
                        { replacements: [o.name, townId], transaction: t }
                    );
                }
            }

            // 4) Pokémon (récupérer type_id)
            for (const p of data) {
                let typeId = null;
                if (p.type) {
                    const [rows] = await sequelize.query(
                        `SELECT id FROM pokemon_type WHERE type_name = ?`,
                        { replacements: [p.type], transaction: t }
                    );
                    typeId = rows[0]?.id ?? null;
                }
                await sequelize.query(
                    `INSERT INTO pokemon (id, name, type_id, height, weight)
           VALUES (?, ?, ?, ?, ?)
           ON DUPLICATE KEY UPDATE name = VALUES(name),
                                   type_id = VALUES(type_id),
                                   height = VALUES(height),
                                   weight = VALUES(weight)`,
                    { replacements: [p.id, p.name, typeId, p.height ?? null, p.weight ?? null], transaction: t }
                );
            }

            // 5) Jointure pokemon_trainer
            for (const p of data) {
                for (const o of arr(p.ownedBy)) {
                    if (!o?.name) continue;
                    const [[pokemonRow]] = await sequelize.query(
                        `SELECT id FROM pokemon WHERE id = ?`,
                        { replacements: [p.id], transaction: t }
                    );
                    const [[trainerRow]] = await sequelize.query(
                        `SELECT id FROM trainer WHERE name = ?`,
                        { replacements: [o.name], transaction: t }
                    );
                    if (pokemonRow && trainerRow) {
                        await sequelize.query(
                            `INSERT IGNORE INTO pokemon_trainer (pokemon_id, trainer_id) VALUES (?, ?)`,
                            { replacements: [pokemonRow.id, trainerRow.id], transaction: t }
                        );
                    }
                }
            }
        });

        console.log('Import terminé ✅');
        await sequelize.close();
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();

