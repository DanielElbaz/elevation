const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:1234@127.0.0.1/pokemon')

sequelize
.query('SELECT name FROM POKEMON where weight=(SELECT MAX(weight) from pokemon)')
.then(function ([result]) {
        console.log(result)
    });

async function findByType(type_name){
    const [result]=await sequelize.query(`
    SELECT p.name 
    FROM pokemon p JOIN pokemon_type t ON p.type_id = t.id 
    WHERE t.type_name='${type_name}'`)
    
    return result.map(({name})=>name);
}
findByType('grass').then(console.log).catch(console.error);

async function findOwners(pokemon_name) {
    const [result]=await sequelize.query(`
        SELECT t.name
        FROM trainer t 
        JOIN pokemon_trainer pt ON pt.trainer_id = t.id
        JOIN pokemon p ON p.id = pt.pokemon_id
        where p.name='${pokemon_name}'`)

    return result.map(r=>r.name);
}
findOwners("gengar").then(console.log)

async function findRoster(trainer_name){
    const [result]=await sequelize.query(`
        SELECT p.name
        FROM pokemon p 
        JOIN pokemon_trainer pt ON pt.pokemon_id=p.id
        JOIN trainer t ON pt.trainer_id=t.id
        WHERE t.name='${trainer_name}'`);
    return result.map(r=>r.name);
}
findRoster("Loga").then(console.log)