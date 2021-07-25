SELECT * FROM sakila.film;

SELECT title, IF (rental_rate > 0.99, 'CARO demais sô', 'BARATO demais sô') AS `BARATO/CARO`
FROM sakila.film LIMIT 10;

SELECT title, rental_rate,
  CASE rental_rate
    WHEN 0.99 THEN 'BARATO'
    WHEN 2.99 THEN 'MÉDIO'
    WHEN 4.99 THEN 'CARO'
  ELSE rental_rate
  END AS Valor
FROM sakila.film
ORDER BY title ASC
LIMIT 10;

SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM sakila.customer
LIMIT 20;

SELECT
  first_name,
  email,
  CASE
    WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
    WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
    WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
    ELSE 'não classificado'
  END AS valor
FROM sakila.customer
LIMIT 10;

-- ####Para Fixar

-- 1) Usando o IF na tabela sakila.film , exiba o id do filme , o título e uma coluna extra chamada 'conheço o filme?' , em que deve-se avaliar se o nome do filme é ' ACE GOLDFINGER '. Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.
SELECT film_id, title, 
  IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'Conheço o filme?'
FROM sakila.film;

/* 2) Usando o CASE na tabela sakila.film , exiba o título , a classificação indicativa ( rating ) e uma coluna extra que vamos chamar de 'público-alvo' , em que classificaremos o filme de acordo com as seguintes siglas:
  G: "Livre para todos";
  PG: "Não recomendado para menores de 10 anos";
  PG-13: "Não recomendado para menores de 13 anos";
  R: "Não recomendado para menores de 17 anos";
  Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade"
  */
SELECT title AS 'Título', rating AS 'Classificação',
  CASE rating
    WHEN 'G' THEN 'Livre para todos'
    WHEN 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN 'R' THEN 'Não recomendado para menores de 17 anos'
  ELSE 'Proibido para menores de idade'
  END AS 'público-alvo'
FROM sakila.film;
