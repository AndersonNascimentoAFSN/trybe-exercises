SELECT * FROM sakila.staff;

DELETE FROM sakila.staff 
WHERE staff_id = 6;

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

DELETE FROM sakila.film_actor
WHERE actor_id = 7;


-- ###Vamos praticar o DELETE

-- Exclua do banco de dados o ator com o nome de "KARL".
  SELECT * FROM sakila.actor WHERE first_name = 'KARL';
  SELECT * FROM sakila.film_actor;
  DELETE FROM sakila.film_actor
  WHERE actor_id = 12;
  DELETE fROM sakila.actor 
  WHERE first_name = 'KARL';

-- Exclua do banco de dados os atores com o nome de "MATTHEW".
SELECT * FROM sakila.actor 
WHERE first_name = 'MATTHEW';
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

SELECT * FROM sakila.film_actor;
DELETE FROM sakila.film_actor
WHERE actor_id in (8, 103, 181); 

-- Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
SELECT * FROM film_text
WHERE description LIKE '%saga%';

DELETE FROM film_text
WHERE description LIKE '%saga%';


-- Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

SELECT * FROM sakila.film_actor;

-- Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).


-- Exclua o banco de dados e o recrie (use as instruções no início desta aula).
DROP DATABASE sakila;
SHOW DATABASES

