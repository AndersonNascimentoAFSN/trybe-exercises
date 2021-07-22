SELECT * FROM sakila.staff;

INSERT INTO sakila.staff(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
('Yanni', 'Teixeira', 1, 'yanni@gmail.com', 1, 1, 'YanniT', '46a5s46564654');

UPDATE  sakila.staff
SET first_name = 'Celma', last_name = 'Nascimento'
WHERE staff_id = 6;

UPDATE sakila.staff
SET first_name = (
  CASE staff_id 
    WHEN 4 THEN 'Thyago'
    WHEN 5 THEN 'Bruno'
    ELSE first_name
  END
);


SET SQL_SAFE_UPDATES = 0;

-- 1) Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".
SELECT * FROM sakila.actor WHERE first_name = 'JULES';

UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

-- 2) Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
SELECT * FROM sakila.category;
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

-- 3) Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.

SELECT * FROM sakila.film;

UPDATE sakila.film
SET replacement_cost = 25
WHERE length > 100 AND rating in('G' , 'PG', 'PG-13');

-- 4) Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.

-- UPDATE sakila.film
-- SET rental_rate = 10
-- WHERE length <= 100;

-- UPDATE sakila.film
-- SET rental_rate = 20
-- WHERE length > 100;

UPDATE sakila.film
SET rental_rate = (
  CASE
    WHEN `length` <= 100 THEN 10
    WHEN `length` > 100 THEN 20
    ELSE rental_rate
END);

SELECT * FROM sakila.film;