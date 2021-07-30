
-- 1) PROCEDURE SEM PARÂMETROS:
/* USE Pixar;
DELIMITER $$;
CREATE PROCEDURE ObterNomeDosFilmes()
BEGIN
  SELECT title FROM Pixar.Movies;
END $$;

DELIMITER ;

CALL Pixar.ObterNomeDosFilmes; */


-- 2) PROCEDURE COM PARÂMETRO DE ENTRADA:

/* USE Pixar;
DELIMITER $$

CREATE PROCEDURE SelecionarFilmesComNotaMaiorQue(IN nota NUMERIC)
BEGIN
  SELECT
    title
  FROM
    Pixar.Movies AS m
  INNER JOIN Pixar.BoxOffice AS b
  ON m.id = b.movie_id
  WHERE rating > nota;
END $$

DELIMITER ;

CALL SelecionarFilmesComNotaMaiorQue(5); */


-- 3) PROCEDURE COM PARÂMETRO DE SAÍDA:


/* USE Pixar;
DELIMITER $$

CREATE PROCEDURE RetornaMediaDoRatingDosFilmes( OUT averageRating DOUBLE)
BEGIN
  SELECT AVG(rating) FROM Pixar.BoxOffice INTO averageRating;
END $$
DELIMITER ;

CALL RetornaMediaDoRatingDosFilmes(@average);

SELECT @average;

-- Lista de filmes abaixo da média:
SELECT rating FROM Pixar.BoxOffice WHERE rating < @average;

-- Lista de filmes acima da média:
SELECT rating FROM Pixar.BoxOffice WHERE rating > @average; */

--Como setar uma váriável:
/* SET @movie = 'Ratatuille';
SELECT * FROM Pixar.Movies WHERE title = @movie; */



-- 4) PROCEDURE COM PARÂMETRO DE ENTRADA E SAÍDA:


/* USE Pixar;
DELIMITER $$

CREATE PROCEDURE RetornaMediaDoRatingDosFilmesEmCartazes( IN selectedFilms VARCHAR(50), OUT averageRating DOUBLE)
BEGIN
  SELECT AVG(b.rating) FROM Pixar.BoxOffice
  WHERE movie_id=selectedFilms INTO averageRating;
END $$
DELIMITER ;

CALL RetornaMediaDoRatingDosFilmesEmCartazes(5, @average); */



/* SELECT
  id
FROM Pixar.Movies
WHERE theater_id IS NOT NULL
; */


-- 5) PROCEDURE COM PARÂMETRO INOUT:

/* USE Pixar;
DELIMITER $$

CREATE PROCEDURE RetornaRatingDoFilme(INOUT selectMovie VARCHAR(200))
BEGIN
  SELECT 
    CONCAT('O filme', selectMovie, 'tem ', rating, 'de rating')
    FROM Pixar.BoxOffice
    WHERE movie_id=selectMovie
    INTO selectMovie;
END $$

DELIMITER ; 

SET @selectMovie = 1;
RetornaRatingDoFilme(@selectMovie);
SELECT @selectMovie;

*/




/* Construindo sua primeira stored procedure
Vamos criar nossas primeiras stored procedures . Temos os seguintes tipos:
Procedure sem parâmetros;
Procedure com parâmetros de entrada (IN) ;
Procedure com parâmetros de saída (OUT) ;
Procedure com parâmetros de entrada e saída (IN-OUT) . */


-- Procedure sem parâmetros:

USE sakila;
DELIMITER $$
CREATE PROCEDURE ShowAllActors()
BEGIN
  SELECT * FROM sakila.actor;
END $$

DELIMITER ;

USE sakila;
CALL ShowAllActors();

-- Procedure com parâmetros de entrada (IN):

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
  SELECT *
  FROM sakila.actor
  WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;

CALL ShowActorsWithSyllable('lope');


-- Procedure com parâmetros de saida (OUT):

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAverageRentalDurationOfMovie(
  IN film_name VARCHAR(300),
  OUT media_aluguel_em_dias DOUBLE
)
BEGIN
  SELECT AVG(rental_duration) INTO media_aluguel_em_dias
  FROM sakila.film
  WHERE title = film_name;
END $$

DELIMITER ;

CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias;


-- Procedure com parâmetros de entrada-saida (IN-OUT):

USE sakila;
DELIMITER $$

CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
  SELECT CONCAT('ULTRA', film_name, 'THE BEST MOVIE OF THE CENTURY')
  INTO film_name;
END $$

DELIMITER ;

SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title;
