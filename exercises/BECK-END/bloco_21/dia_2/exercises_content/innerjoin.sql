SELECT * FROM sakila.city;
SELECT * FROM sakila.country;
SELECT city.city, city.country_id, country.country
FROM sakila.city AS city
INNER JOIN sakila.country AS country
ON city.country_id = country.country_id;



SELECT * FROM sakila.language;
SELECT * FROM sakila.film;
SELECT f.title, f.language_id, l.name
FROM sakila.film AS f
INNER JOIN sakila.language AS l
ON f.language_id = l.language_id;


-- Vamos ver agora alguns desafios para consolidar esse conhecimento sobre o INNER JOIN , utilizando o banco de dados sakila . Antes de começar a escrever suas queries , identifique quais tabelas contêm as informações de que você precisa e como elas estão relacionadas.

-- 1) Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor.
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT 
  a.actor_id, 
  CONCAT(a.first_name, ' ', a.last_name) AS `FULL_NAME`,
  f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

-- 2) Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT 
  s.first_name,
  s.last_name,
  a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;

-- 3) Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT 
  c.customer_id,
  c.first_name,
  c.email,
  a.address_id,
  a.address
FROM sakila.customer as c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY first_name DESC
LIMIT 100;

-- 4) Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT 
  c.first_name,
  c.email,
  c.address_id,
  a.address,
  a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

-- 5) Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT
  c.first_name,
  COUNT(a.address) AS number_of_address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY 
  c.first_name,
  a.address
ORDER BY c.first_name DESC
;

-- 6) Monte uma query que exiba o nome, sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT * FROM sakila.payment;
SELECT * FROM sakila.staff;

SELECT 
  s.first_name,
  s.last_name,
  p.payment_date,
  AVG(p.amount) AS `average`,
  COUNT(p.amount) AS `quantity_of_payment`
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
-- WHERE YEAR(p.payment_date) = '2006'
GROUP BY
  s.first_name,
  s.last_name,
  p.payment_date
HAVING YEAR(p.payment_date) = '2006'
;

-- 7) Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;

SELECT 
  a.actor_id,
  a.first_name,
  f.film_id,
  f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
ON a.actor_id = fa.actor_id
INNER JOIN sakila.film AS f
ON f.film_id = fa.film_id
;
