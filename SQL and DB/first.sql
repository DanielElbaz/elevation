-- 1) créer la base si elle n'existe pas
CREATE DATABASE IF NOT EXISTS sql_intro
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_0900_ai_ci;
USE sql_intro; -- lets VS code know which DB to use

CREATE TABLE Deity(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    mythology VARCHAR(20),
    main_power VARCHAR(50),
    coolness INT,
    creation_date INT
)

INSERT INTO Deity 
VALUES(null, "Poseidon", "Greek", "Water", 10, "-1400")

DELETE FROM Deity WHERE coolness=11

