/* Desafios stored procedure
Para todos os desafios abaixo, certifique-se de que a função possa ser chamada e o resultado dela seja usado corretamente. Utilize o banco de dados sakila . */

-- 1) Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT
  actor_id,
  COUNT(actor_id) AS 'quantity_of_films' 
  FROM sakila.film_actor
GROUP BY actor_id
ORDER BY quantity_of_films DESC
LIMIT 10;


USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowRankigTop10ActoresWithMoreMovies()
BEGIN
  SELECT
    f.actor_id,
    CONCAT(a.first_name, ' ', a.last_name) AS full_name,
    COUNT(f.actor_id) AS 'quantity_of_films'

  FROM sakila.film_actor AS f
  INNER JOIN sakila.actor AS a
  ON f.actor_id = a.actor_id
  GROUP BY f.actor_id
  ORDER BY quantity_of_films DESC
  LIMIT 10;
END $$

DELIMITER ;

CALL ShowRankigTop10ActoresWithMoreMovies();

-- 2) Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
SELECT * FROM sakila.film;
SELECT * FROM sakila.film_category;
SELECT * FROM sakila.category;


SELECT
  f.film_id,
  f.title,
  c.category_id,
  c.name
FROM sakila.film AS f
INNER JOIN sakila.film_category AS fc
ON f.film_id = fc.film_id
INNER JOIN sakila.category AS c
ON fc.category_id = c.category_id
WHERE c.name = 'Action';


USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowMoviesFromSelectedCategory(IN categoryName VARCHAR(100))
BEGIN
  SELECT
    f.film_id,
    f.title,
    c.category_id,
    c.name
  FROM sakila.film AS f
  INNER JOIN sakila.film_category AS fc
  ON f.film_id = fc.film_id
  INNER JOIN sakila.category AS c
  ON fc.category_id = c.category_id
  WHERE c.name=categoryName;
END $$

DELIMITER ;

CALL ShowMoviesFromSelectedCategory('Action');

-- 3) Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.

SELECT * FROM sakila.customer;

SELECT
  IF(active = 1, 'YES', 'NO') AS isActive
FROM sakila.customer
WHERE email='ELIZABETH.BROWN@sakilacustomer.org';


USE sakila;
DELIMITER $$

CREATE PROCEDURE checkIfTheClientIsActive(
  IN emailClient VARCHAR(100),
  OUT isActive VARCHAR(4))
BEGIN
  SELECT
    IF(active = 1, 'YES', 'NO') INTO isActive
  FROM sakila.customer
  WHERE email=emailClient;
END $$

DELIMITER ;

CALL checkIfTheClientIsActive('ELIZABETH.BROWN@sakilacustomer.org', @IsActive);
CALL checkIfTheClientIsActive('JUDITH.COX@sakilacustomer.org', @IsActive);
SELECT @isActive;


USE sakila;
DELIMITER $$

CREATE PROCEDURE checkIfTheClientIsActive(
  IN client_email VARCHAR(200),
  OUT isActive BOOL
)
BEGIN
  SET isActive = (
    SELECT active
    FROM sakila.customer
    WHERE email = client_email
  );
END $$

DELIMITER ;
