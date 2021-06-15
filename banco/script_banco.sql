CREATE DATABASE IF NOT EXISTS jogos_olimpicos;

USE jogos_olimpicos;

CREATE TABLE IF NOT EXISTS esportes (
    `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `modalidade` VARCHAR(45) NOT NULL,
    `tipo` VARCHAR(45) NOT NULL,
    `distancia` FLOAT,
    `sexo` CHAR(1) NOT NULL,
    `local` VARCHAR(45) NOT NULL
);