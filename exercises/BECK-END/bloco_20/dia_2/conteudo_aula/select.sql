
-- ############Prática SELECT #########################

-- 1) Monte uma query que exiba seu nome na tela;
SELECT 'Anderson' AS Nome;
-- 2) Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'Anderson', 'Nascimento', 'Maceió', 29;
-- 3 Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);
SELECT 'Anderson' AS Nome, 'Nascimento' AS Sobrenome, 'Maceió' AS 'Cidade Natal', 29 AS Idade;
-- 4 Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
SELECT 13 * 8;
-- 5 Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
SELECT now() AS 'Data Atual';

-- #### Vamos agora entrar no banco de dados sakila e encontrar as seguintes informações, montando uma query para cada uma:

-- 1) Escreva uma query que selecione todas as colunas da tabela city;
use sakila;
SELECT * from sakila.city;

-- 2) Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer;
SELECT CONCAT(first_name, " ", last_name) AS 'full_name' from sakila.customer;
-- 3) Escreva uma query que exiba todas as colunas da tabela rental;
SELECT * from sakila.rental;
-- 4) Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;
SELECT title, description, release_year FROM sakila.film;
-- 5) Utilize o SELECT para explorar todas as tabelas do banco de dados.
SELECT table_schema, table_name, table_type FROM information_schema.tables;
