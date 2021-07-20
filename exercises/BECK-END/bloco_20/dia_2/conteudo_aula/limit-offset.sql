-- ############Prática LIMIT e OFFSET #########################

SELECT COUNT(*) FROM sakila.rental;

SELECT * FROM sakila.rental LIMIT 10;

SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;

-- Qual query eu teria que montar para trazer os 10 primeiros resultados, a partir de JOHNNY?


SELECT * FROM sakila.actor LIMIT 10 OFFSET 4;