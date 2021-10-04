/*
## O que é INDEX?

- Uma maneira de estruturar os dados para que sejam encontrados mais rapidamente.

## TIPOS

  -PRIMARY KEY
  -UNIQUE
  -INDEX
  -FULLTEXT INDEX


  ## COMO CRIAR UM INDEX DEL

  1 - Em uma tabela existente

  CREATE INDEX nome_index ON tabela(coluna);
  CREATE FULLTEXT INDEX nome_index ON tabela(coluna);


  2 - Ao criar uma tabela

  CREATE DATABASE IF NOT EXISTS pizzaria;
  USE pizzaria;

  CREATE TABLE pizzas(
    pizza_id INT PRIMARY KEY,
    sabor VARCHAR(100),
    preco DECIMAL(5, 2),
    INDEX sabor_index(sabor)
  ) ENGINE=InnoDB;


  3 - Ao alterar uma tabela

  ALTER TABLE nome_tabela
  ADD INDEX nome_index(nome_coluna);
*/

  CREATE DATABASE IF NOT EXISTS pizzaria;
  USE pizzaria;

  CREATE TABLE pizzas(
    pizza_id INT PRIMARY KEY,
    sabor VARCHAR(100),
    preco DECIMAL(5, 2),
    INDEX sabor_index(sabor)
  ) ENGINE=InnoDB;
