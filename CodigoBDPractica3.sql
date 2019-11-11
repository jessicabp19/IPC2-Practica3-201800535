CREATE DATABASE IF NOT EXISTS dbPractica3;
USE dbPractica3;

CREATE TABLE IF NOT EXISTS Usuario(
	id_usuario INT UNSIGNED PRIMARY KEY,
    nombre varchar(50) NOT NULL,
    apellito varchar(50) NOT NULL,
	nom_user varchar(50) NOT NULL,
    contrasenia varchar(25) NOT NULL
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Mensaje(
	id_mensaje INT UNSIGNED auto_increment PRIMARY KEY,
    idremitente INT UNSIGNED NOT NULL,
	iddestinatario INT UNSIGNED NOT NULL,
    cuerpo VARCHAR(35) NOT NULL,
    FOREIGN KEY(idremitente) REFERENCES Usuario(id_usuario),
    FOREIGN KEY(iddestinatario) REFERENCES Usuario(id_usuario)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Conversacion(
	id_conversacion INT UNSIGNED auto_increment PRIMARY KEY,
    idremitente INT UNSIGNED NOT NULL,
	iddestinatario INT UNSIGNED NOT NULL,
    eliminado VARCHAR(2) NOT NULL,
    FOREIGN KEY(idremitente) REFERENCES Usuario(id_usuario),
    FOREIGN KEY(iddestinatario) REFERENCES Usuario(id_usuario)
)ENGINE=INNODB;