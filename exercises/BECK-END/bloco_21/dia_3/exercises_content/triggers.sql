-- Criando reações dinâmicas com Triggers

-- Sintaxe:
/* DELIMITER $$

CREATE TRIGGER nome_do_trigger
[BEFORE | AFTER] [INSERT | UPDATE | DELETE] ON tabela
FOR EACH ROW
BEGIN
    -- o código SQL entra aqui
END $$

DELIMITER $$ ; */

-- Exemplo de trigger para o INSERT:

SELECT * FROM rede_social.perfil;
SELECT * FROM rede_social.log_perfil;

USE rede_social;
DELIMITER $$
CREATE TRIGGER trigger_perfil_insert
  BEFORE INSERT ON perfil
  FOR EACH ROW
BEGIN
  SET NEW.ultima_atualizacao = NOW(),
      NEW.acao = 'INSERT';
END $$

DELIMITER ;

INSERT INTO perfil(saldo) VALUES (2500);

SELECT * FROM rede_social.perfil;


-- Exemplo de trigger para o UPDATE:

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_update
  BEFORE UPDATE ON perfil
  FOR EACH ROW
BEGIN
  SET NEW.ultima_atualizacao = NOW(),
      NEW.acao = 'UPDATE';
END $$
DELIMITER ;

UPDATE rede_social.perfil
SET saldo = 3000
WHERE perfil_id = 1;

SELECT * FROM rede_social.perfil;

-- Exemplo de trigger para o DELETE:


USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_delete
  AFTER DELETE ON perfil
  FOR EACH ROW
BEGIN
  INSERT INTO log_perfil(acao, data_acao)
  VALUES ('exclusão', NOW());
END $$
DELIMITER ;

DELETE FROM perfil WHERE perfil_id = 1;

SELECT * FROM rede_social.log_perfil;
