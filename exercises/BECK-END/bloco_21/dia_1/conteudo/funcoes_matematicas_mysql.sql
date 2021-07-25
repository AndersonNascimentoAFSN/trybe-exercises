-- Adição, Subtração, Multiplicação e Divisão
SELECT 5 + 5 AS `SUM`;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

SELECT rental_duration + rental_rate 
FROM sakila.film
LIMIT 10;

-- Divisão de inteiros com DIV e como encontrar seus restos com o MOD

-- O DIV retorna o resultado inteiro de uma divisão, ignorando as casas decimais de um número. Veja os exemplos abaixo:
SELECT 10 DIV 3;

-- Já o operador MOD retorna o resto de uma divisão como resultado. Por exemplo:
SELECT 10 MOD 3;

/* Desafios com DIV e MOD
Dica: Números pares são aqueles que podem ser divididos em duas partes iguais. Ou seja, são aqueles cuja divisão por 2 retorna resto 0. */

-- Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.
SELECT 
IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS `Par ou Ímpar`;

-- Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
SELECT 220 DIV 12;

-- Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
SELECT 220 MOD 12;

-- #### Arredondando Valores

SELECT ROUND(10.4925);
SELECT ROUND(10.5136);

SELECT CEIL(10.51);
SELECT CEIL(10.49);

SELECT FLOOR(10.51);
SELECT FLOOR(10.49);

-- Exponenciação e Raiz Quadrada

SELECT POW(2, 2);
SELECT POW(2, 4);

SELECT SQRT(9);
SELECT SQRT(16);

-- Gerando valores aleatórios

SELECT RAND();

SELECT ROUND(7 + (RAND() * 6));

-- ###Para Fixar

-- 1) Monte uma query que gere um valor entre 15 e 20.
SELECT ROUND(15 + (RAND() * 5));
SELECT FLOOR(RAND() * (20 - 15 + 1) + 15);

-- 2) Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
SELECT ROUND(15.7515971, 5);


-- 3) Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
SELECT FLOOR(39.494);


-- 4) Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT CONCAT(CEIL(85.234), '%');
