-- ##### Desafios sobre VIEW

-- 1. Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila. Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.
CREATE VIEW film_with_categories AS
  SELECT 
    f.title,
    c.category_id,
    c.name

  FROM sakila.category AS c
  INNER JOIN sakila.film_category AS fc
  ON c.category_id = fc.category_id
  INNER JOIN sakila.film AS f
  ON fc.film_id = f.film_id
  ORDER BY f.title ASC;
  
SELECT * FROM film_with_categories
LIMIT 100;

-- 2. Crie uma view chamada film_info utilizando as tabelas actor, film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id, o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.
CREATE VIEW film_info AS
  SELECT 
    a.actor_id,
    CONCAT(a.first_name, ' ', a.last_name) AS actor,
    f.title
  FROM sakila.actor AS a
  INNER JOIN sakila.film_actor AS fa
  ON a.actor_id = fa.actor_id
  INNER JOIN sakila.film AS f
  ON fa.film_id = f.film_id
  ORDER BY actor ASC;

SELECT * FROM film_info;

-- 3. Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila. Sua view deve exibir o address_id, o address, o district, o city_id e a city. Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.
CREATE VIEW address_info AS
  SELECT
    a.address_id,
    a.address,
    a.district,
    c.city_id,
    city
  FROM sakila.address AS a
  INNER JOIN sakila.city AS c
  ON a.city_id = c.city_id;

SELECT * FROM address_info;

-- 4. Crie uma view chamada movies_languages, usando as tabelas film e language do banco de dados sakila. Sua view deve exibir o título do filme, o id do idioma e o idioma do filme, como na imagem a seguir.
CREATE VIEW movies_languages AS
  SELECT
    f.title,
    l.language_id,
    l.name
  FROM sakila.film AS f
  INNER JOIN sakila.language AS l
  GROUP BY f.title, l.language_id
  ORDER BY l.language_id ASC, f.title;

SELECT * FROM movies_languages;



-- ##### Desafios sobre INDEX


-- 1. Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o na coluna name. Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
SELECT * FROM sakila.category
WHERE name LIKE 'Action';
CREATE FULLTEXT INDEX index_name ON sakila.category(name);
DROP INDEX index_name ON sakila.category;
SELECT * FROM sakila.category
WHERE MATCH(name) AGAINST('Action');

-- 2. Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code. Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
SELECT * FROM sakila.address;

SELECT * FROM sakila.address
WHERE postal_code = '58327';
CREATE INDEX index_postal_code ON sakila.address(postal_code);
DROP INDEX index_postal_code ON sakila.address;
SHOW INDEX FROM sakila.address;

SELECT * FROM sakila.address
WHERE postal_code = '58327';


-- ##### Desafios sobre ALTER TABLE

/* Restaure o banco de dados HR abaixo antes de continuar, caso não o tenha restaurado em alguma lição anterior:
O banco de dados usado como base para os próximos exercícios pode ser restaurado através deste arquivo SQL.
 - Baixe o conteúdo do arquivo .sql linkado acima;
 - Copie todo o código SQL;
 - Abra o MySQL Workbench e abra uma nova janela de query;
 - Cole o SQL para dentro dessa janela;
 - Selecione todo o código usando CTRL + A;
 - Execute-o teclando CTRL + ENTER. */


-- Desafios:

-- 1) Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address, mantendo o mesmo tipo e tamanho de dados.
SELECT * FROM hr.locations;
SHOW COLUMNS FROM hr.locations;
ALTER TABLE hr.locations CHANGE COLUMN `street_address` `address` VARCHAR(40);


-- 2) Escreva uma query SQL para alterar o nome da coluna region_name para region, mantendo o mesmo tipo e tamanho de dados.
SELECT * FROM hr.regions;
SHOW COLUMNS FROM hr.regions;

ALTER TABLE hr.regions CHANGE COLUMN REGION_NAME region VARCHAR(25) UNIQUE;

-- 3) Escreva uma query SQL para alterar o nome da coluna country_name para country, mantendo o mesmo tipo e tamanho de dados.
SELECT * FROM hr.countries;
SHOW COLUMNS FROM hr.countries;
ALTER TABLE hr.countries CHANGE COLUMN COUNTRY_NAME country VARCHAR(40);
