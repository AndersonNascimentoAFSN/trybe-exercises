-- Utilizando as funções de agregação AVG , MIN , MAX , SUM e COUNT

SELECT AVG(replacement_cost)
FROM sakila.film;
SELECT MIN(replacement_cost)
FROM sakila.film;
SELECT MAX(replacement_cost)
FROM sakila.film;
SELECT ROUND(SUM(replacement_cost)) 
FROM sakila.film;
SELECT COUNT(replacement_cost)
FROM sakila.film;

-- Para Fixar - Para praticar, vamos encontrar algumas informações sobre os filmes cadastrados em nossa base de dados.

/* Monte um query que exiba:
  -A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
  -A duração mínima dos filmes como 'Duração Mínima';
  -A duração máxima dos filmes como 'Duração Máxima';
  -A soma de todas as durações como 'Tempo de Exibição Total';
  -E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'. */

SELECT 
  ROUND(AVG(length), 2) AS `Média de Duração0`, MIN(length) AS `Duração Mínima`,
  MAX(length) AS `Duração Máxima`,
  SUM(length) AS `Tempo de Exibição Total`,
  COUNT(film_id) AS `Filmes Registrados`
FROM sakila.film;
