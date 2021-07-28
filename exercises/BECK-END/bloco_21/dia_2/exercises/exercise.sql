-- #### Faça os exercícios 1 a 12 utilizando banco de dados Pixar abaixo:
USE Pixar;
-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.

SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;

SELECT
  Movies.id,
  Movies.title,
  BoxOffice.domestic_sales,
  BoxOffice.international_sales
FROM 
  Pixar.Movies AS Movies
INNER JOIN
  Pixar.BoxOffice AS BoxOffice
ON
  Movies.id = BoxOffice.movie_id;


-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;

SELECT
  m.title,
  b.domestic_sales,
  b.international_sales
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE international_sales > b.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;

SELECT
  m.id,
  m.title,
  b.rating
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
ORDER BY b.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;

SELECT *
FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;

SELECT *
FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;

/* Usando o INNER JOIN */

SELECT 
  m.title,
  b.rating
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.rating > 7.5
ORDER BY b.rating ASC;


/* 4º método - Usando uma tabela externa, de fora da SUBQUERY , dentro dela. */

SELECT
  title,
  (
    SELECT
      rating
    FROM Pixar.BoxOffice
    WHERE Pixar.BoxOffice.movie_id = movie.id
  ) AS rating
FROM Pixar.Movies AS movie
HAVING rating > 7.5
ORDER BY rating ASC;

/* 3º método - Filtrando resultados com WHERE usando como base os dados retornados de uma SUBQUERY. */

SELECT
  title
FROM Pixar.Movies
WHERE id IN (
  SELECT movie_id
FROM Pixar.BoxOffice
WHERE rating > 7.5
);


/* 2º método - Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY . */

SELECT
  title,
  (
    SELECT rating
    FROM Pixar.BoxOffice
    WHERE BoxOffice.movie_id = Pixar.Movies.id
  ) AS rating
FROM Pixar.Movies
HAVING rating > 7.5;

/* 1º método - Usando uma SUBQUERY como fonte de dados para o FROM. */
SELECT
  m.title
FROM (
  SELECT title
  FROM Pixar.Movies
  WHERE id IN (
    SELECT movie_id
    FROM Pixar.BoxOffice
    WHERE rating > 7.5
  )
) AS m;


-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que retornem as avaliações dos filmes lançados depois de 2009.
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;


/* INNER JOIN */
SELECT
  m.title,
  b.rating
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE m.year > 2009
ORDER BY b.rating ASC;

/* SUBQUERY */

SELECT rating
FROM Pixar.BoxOffice
WHERE movie_id in (
  SELECT id
  FROM Pixar.Movies
  WHERE year > 2009
)
ORDER BY rating ASC;

SELECT
  title,
  (
    SELECT rating
    FROM Pixar.BoxOffice
    WHERE Pixar.BoxOffice.movie_id = m.id
  ) AS rating
FROM Pixar.Movies as m
WHERE year > 2009
ORDER BY rating ASC;


-- Exercício 8: Utilizando o EXISTS, selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;

SELECT 
  t.name,
  t.location
FROM Pixar.Theater AS t
WHERE EXISTS (
  SELECT theater_id
  FROM Pixar.Movies
  WHERE t.id = theater_id
);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;

SELECT 
  t.name,
  t.location
FROM Pixar.Theater AS t
WHERE NOT EXISTS (
  SELECT theater_id
  FROM Pixar.Movies
  WHERE t.id = theater_id
);
