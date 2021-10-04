-- Desafios Triggers

-- Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1.
SELECT * from betrybe_automoveis.carros;
SELECT * from betrybe_automoveis.log_operacoes;


DROP TRIGGER betrybe_automoveis_insert;
USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER betrybe_automoveis_insert
  BEFORE INSERT ON carros
  FOR EACH ROW
BEGIN
  SET NEW.data_atualizacao = NOW(),
      NEW.acao = 'INSERÇÃO',
      NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;

INSERT INTO betrybe_automoveis.carros(preco) VALUES(4500);
SELECT * FROM betrybe_automoveis.carros

-- Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO'.

USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER betrybe_automove_update
  BEFORE UPDATE ON carros
  FOR EACH ROW
BEGIN 
  SET NEW.data_atualizacao = NOW(),
      NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;


UPDATE betrybe_automoveis.carros
SET preco = 2900
WHERE id_carro = 2;

SELECT * FROM betrybe_automoveis.carros;

-- Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.

USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER betrybe_automove_delete
  AFTER DELETE ON carros
  FOR EACH ROW
BEGIN
  INSERT INTO log_operacoes (tipo_operacao, data_ocorrido) VALUES ('EXCLUSÃO', NOW());
END $$
DELIMITER ;

DELETE FROM betrybe_automoveis.carros WHERE id_carro in(4, 5);

SELECT * FROM betrybe_automoveis.carros;
SELECT * FROM betrybe_automoveis.log_operacoes;
