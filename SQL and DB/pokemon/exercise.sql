USE pokemon;

CREATE Table Pokemon (
    id INT PRIMARY KEY,
    name VARCHAR(25),
    type_id INT,
    height INT,
    weight INT,
    Foreign Key (type_id) REFERENCES pokemon_type (id) ON UPDATE CASCADE ON DELETE SET NULL
)

CREATE TABLE pokemon_type (
    id INT PRIMARY KEY AUTO_INCREMENT,
    type_name VARCHAR(25) NOT NULL UNIQUE
)

CREATE TABLE TRAINER (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL UNIQUE,
    town_id INT,
    Foreign Key (town_id) REFERENCES town (id) ON UPDATE CASCADE ON DELETE SET NULL
)

create table town (
    id int PRIMARY key AUTO_INCREMENT,
    name VARCHAR(25)
)

CREATE TABLE pokemon_trainer (
    pokemon_id INT,
    trainer_id INT,
    Foreign Key (pokemon_id) REFERENCES pokemon (id) ON UPDATE CASCADE ON DELETE SET NULL,
    Foreign Key (trainer_id) REFERENCES trainer (id) ON UPDATE CASCADE ON DELETE SET NULL
)

SELECT COUNT(*) FROM pokemon;
SELECT COUNT(*) FROM trainer;
SELECT COUNT(*) FROM pokemon_trainer;
SELECT COUNT(*) FROM town;
SELECT COUNT(*) FROM pokemon_type;
 