-- Estrutura padrão de uma stored function

/* USE banco_de_dados; -- obrigatório para criar a função no banco correto
DELIMITER $$

CREATE FUNCTION nome_da_function(parametro1, parametro2, ..., parametroN)
RETURNS tipo_de_dado tipo_de_retorno
BEGIN
    query_sql
    RETURN resultado_a_ser_retornado;
END $$

DELIMITER ; */



-- Exemplo: Uma stored function que exibe a quantidade de filmes em que um determinado ator ou atriz atuou:

USE sakila;
DELIMITER $$

CREATE FUNCTION MoviesWithActor(actor_id INT)
RETURNS INT READS SQL DATA
BEGIN
  DECLARE movie_total INT;
  SELECT COUNT(*)
  FROM sakila.film_actor
  WHERE sakila.film_actor.actor_id = actor_id INTO movie_total;
  RETURN movie_total;
END $$

DELIMITER ;

SELECT MoviesWithActor(1);


-- Exemplo: Uma stored function que exibe o nome completo de um ator ou de uma atriz, dado seu id como parâmetro:

USE sakila;
DELIMITER $$

CREATE FUNCTION GetFullName(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
  DECLARE full_name VARCHAR(200);
  SELECT CONCAT(first_name, ' ', last_name)
  FROM sakila.actor
  WHERE actor_id = id
  LIMIT 1
  INTO full_name;
  RETURN full_name;
END $$

DELIMITER ;

SELECT GetFullName(51);


-- Agora você vai desenvolver algumas functions

-- 1) Utilizando a tabela sakila.payment, monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id.
SELECT COUNT(*) FROM sakila.payment
GROUP BY customer_id
HAVING customer_id = 1
;

USE sakila;
DELIMITER $$

CREATE FUNCTION NumberOfPaymentsByCustomer(id INT)
RETURNS INT READS SQL DATA
BEGIN
  DECLARE numberOfPayments INT;
  SELECT
    COUNT(*) 
  FROM sakila.payment
  GROUP BY customer_id
  HAVING customer_id = id
  INTO numberOfPayments;
  RETURN numberOfPayments;
END $$

DELIMITER ;

SELECT NumberOfPaymentsByCustomer(1);

-- 2) Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
SELECT * FROM sakila.inventory;
SELECT * FROM sakila.film;
SELECT
    f.title
FROM sakila.inventory AS i
INNER JOIN sakila.film as f
ON i.film_id = f.film_id
WHERE inventory_id = 1
;

USE sakila;
DELIMITER $$

CREATE FUNCTION GetNameMovieByInventoryId(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
  DECLARE movie_name VARCHAR(200);
  SELECT
    f.title
  FROM sakila.inventory AS i
  INNER JOIN sakila.film AS f
  ON i.film_id = f.film_id
  WHERE inventory_id = id
  INTO movie_name;
  RETURN movie_name;
END $$

DELIMITER ;

SELECT GetNameMovieByInventoryId(9);

-- 3) Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action', 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
SELECT * FROM sakila.category;
SELECT * FROM sakila.film_category;


SELECT
  COUNT(*) AS `Quantity_Movies_By_Category`
FROM sakila.category AS c
INNER JOIN sakila.film_category AS fc
ON c.category_id = fc.category_id
WHERE name = 'Comedy'
;


USE sakila;
DELIMITER $$

CREATE FUNCTION GetQuantityMoviesByCategory(nameCategory VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
  DECLARE quantity_movies INT;
  SELECT
    COUNT(*)
  FROM sakila.category AS c
  INNER JOIN sakila.film_category AS fc
  ON c.category_id = fc.category_id
  WHERE c.name = nameCategory
  INTO quantity_movies;
  RETURN quantity_movies;
END $$

DELIMITER ;

SELECT GetQuantityMoviesByCategory('Comedy') AS `Quantity_Movies_By_Category`;
