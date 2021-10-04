SELECT * FROM sakila.staff;

-- Insira um novo funcionário na tabela sakila.staff. -- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!
INSERT INTO sakila.staff(first_name, last_name, address_id, email, store_id, active, username, password) VALUES
('Anderson', 'Nascimento', 3, 'anderson.nascimentoafsn@gmail.com', 1, 1, 'AndersonAFSN', '654654d8615465265465');

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO sakila.staff(first_name, last_name, address_id, email, store_id, active, username, password) VALUES
('Anderson', 'Silva', 2, 'anderson.silva@gmail.com', 1, 1, 'AndersonS', '4d4a6s5d464a611321321'),
('Anderson', 'Felipe', 2, 'andersonf@gmail.com', 1, 1, 'AndersonF', '6a45d4s54d6as65');

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO sakila.actor (first_name, last_name)
  SELECT first_name, last_name
  FROM sakila.customer
  LIMIT 5;

SELECT * FROM sakila.actor WHERE first_name LIKE 'MARY';

-- Cadastre três categorias de uma vez só na tabela sakila.category.
SELECT * FROM sakila.category;
INSERT INTO sakila.category(name) VALUES
('Comédia'),
('Animação'),
('Humor');

-- Cadastre uma nova loja na tabela sakila.store.

SELECT * FROM sakila.store;

INSERT INTO sakila.store(manager_staff_id, address_id) VALUES
(3, 3);
