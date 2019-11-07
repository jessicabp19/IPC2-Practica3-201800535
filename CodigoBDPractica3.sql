CREATE DATABASE IF NOT EXISTS dbPractica3;
USE dbPractica3;

CREATE TABLE IF NOT EXISTS Usuario(
	id_usuario INT UNSIGNED PRIMARY KEY,
    nombre varchar(50) NOT NULL,
    apellito varchar(50) NOT NULL,
	nom_user varchar(50) NOT NULL,
    contrasenia varchar(25) NOT NULL
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Auxiliar(
	id_auxiliar INT UNSIGNED PRIMARY KEY,
    nombre varchar(50) NOT NULL, 
	correo varchar(50) NOT NULL,
    contrasenia varchar(25) NOT NULL
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Curso(
	id_curso INT UNSIGNED PRIMARY KEY,
    nombre varchar(50) NOT NULL, 
    descripcion varchar(50) NOT NULL
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Curso_Asignado(
	id_cursoAsignado INT UNSIGNED auto_increment PRIMARY KEY,
    idcurso INT UNSIGNED NOT NULL, 
	idauxiliar INT UNSIGNED NOT NULL, 
    semestre INT NOT NULL,
	horario VARCHAR(50) NOT NULL,
    anio YEAR NOT NULL,
    seccion VARCHAR(2), 
    fechaLimite DATETIME, 
    FOREIGN KEY(idcurso) REFERENCES Curso(id_curso),
    FOREIGN KEY(idauxiliar) REFERENCES Auxiliar(id_auxiliar)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Asignacion_E(
	id_asignacion INT UNSIGNED auto_increment PRIMARY KEY,
    idcursoAsignado INT UNSIGNED NOT NULL, 
	idestudiante INT UNSIGNED NOT NULL, 
    FOREIGN KEY(idcursoAsignado) REFERENCES Curso_Asignado(id_cursoAsignado),
    FOREIGN KEY(idestudiante) REFERENCES Estudiante(id_estudiante)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Mensaje(
	id_mensaje INT UNSIGNED auto_increment PRIMARY KEY,
    idauxiliar INT UNSIGNED NOT NULL,
	idestudiante INT UNSIGNED NOT NULL, 
    asunto VARCHAR(35) NOT NULL, 
    cuerpo VARCHAR(35) NOT NULL,
    archivo VARCHAR(35) NOT NULL,
    FOREIGN KEY(idauxiliar) REFERENCES Auxiliar(id_auxiliar),
    FOREIGN KEY(idestudiante) REFERENCES Estudiante(id_estudiante)
)ENGINE=INNODB;