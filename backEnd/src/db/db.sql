DROP DATABASE IF EXISTS db_cars;

CREATE DATABASE db_cars;

USE db_cars;

CREATE TABLE
    users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    cars (
        id INT AUTO_INCREMENT PRIMARY KEY,
        car_name VARCHAR(100) NOT NULL,
        model VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2) DEFAULT NULL, -- Definindo precisão e escala
        `range` VARCHAR(45) DEFAULT NULL, -- Usar backticks para palavras reservadas
        image_1 TEXT DEFAULT NULL,
        image_2 TEXT DEFAULT NULL,
        image_3 TEXT DEFAULT NULL,
        image_4 TEXT DEFAULT NULL,
        video TEXT DEFAULT NULL,
        is_show BOOLEAN DEFAULT FALSE -- Renomeando o campo
    );