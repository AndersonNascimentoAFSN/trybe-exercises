-- CHAVE PRIMÁRIA COMPOSTA
DROP SCHEMA IF EXISTS Brasil;
CREATE SCHEMA Brasil;
USE Brasil;

CREATE TABLE cidades(
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(10) NOT NULL,
    populacao INTEGER,
    CONSTRAINT PRIMARY KEY(cidade, estado)
);

INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
      ('Rio Claro','RJ',17216);

-- CHAVE PRIMÁRIA SIMPLES
DROP SCHEMA IF EXISTS Brasil;
CREATE SCHEMA Brasil;
-- DROP TABLE cidades; 
USE Brasil;
CREATE TABLE cidades(
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(10) NOT NULL,
  populacao INTEGER
);

INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
    ('Rio Claro','RJ',17216);


-- Criar o banco de dados albuns
CREATE DATABASE IF NOT EXISTS albuns;
USE albuns;

CREATE TABLE artista(
  artista_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;


CREATE TABLE estilomusical(
  estilo_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE album(
  album_id INT PRIMARY KEY AUTO_INCREMENT,
  artista_id INT NOT NULL,
  titulo VARCHAR(100) NOT NULL,
  preco decimal(5, 2) NOT NULL,
  estilo_id INT NOT NULL,
  FOREIGN KEY (artista_id) REFERENCES artista(artista_id),
  FOREIGN KEY (estilo_id) REFERENCES estilomusical(estilo_id)
) ENGINE=InnoDB;
