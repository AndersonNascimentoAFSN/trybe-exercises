-- CREATE TABLE pessoas (
--   id INT NOT NOT NULL KEY AUTO_INCREMENT,
--   nome VARCHAR(255) NOT NULL,
--   nascimento DATE
-- )

-- INSERT INTO pessas (nome, nascimento) VALUES ('Anderson', '1991-08-31')
-- INSERT INTO pessas (nome, nascimento) VALUES ('Yanni', '2009-05-20')

CREATE TABLE sakila.Filme (
	FilmeId INT auto_increment NOT NULL,
  Descricao VARCHAR(100) NOT NULL,
  AnoLancamento INT NOT NULL,
  Nota INT NOT NULL,
	CONSTRAINT FilmeId PRIMARY KEY (FilmeId)
)
