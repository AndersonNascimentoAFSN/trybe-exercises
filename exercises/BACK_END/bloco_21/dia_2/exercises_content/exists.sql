SELECT * FROM hotel.Customers;
SELECT * FROM hotel.Reservations;

SELECT * FROM hotel.Customers AS c
WHERE EXISTS (
  SELECT * FROM hotel.Reservations
  WHERE c.CustomerID = Reservations.CustomerID
);

SELECT * FROM hotel.Customers AS c
WHERE NOT EXISTS (
  SELECT * FROM hotel.Reservations
  WHERE c.CustomerID = Reservations.CustomerID
);


SELECT * FROM praticando.manufacturers;
SELECT * FROM praticando.products;

SELECT `Name` FROM praticando.manufacturers AS m
WHERE NOT EXISTS (
  SELECT * FROM praticando.products
  WHERE Manufacturer = m.Code
);

SELECT `Name` FROM praticando.manufacturers AS m
WHERE EXISTS (
  SELECT * FROM praticando.products
  WHERE Manufacturer = m.Code
);

-- Vamos Praticar um pouco mais sobre o exists. Use o banco de dados hotel para realizar os desafios a seguir:


-- 1) Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros que ainda não foram emprestados.
SELECT * FROM hotel.Books_Lent;
SELECT * FROM Books;

SELECT id, Title FROM hotel.Books AS b
WHERE EXISTS (
  SELECT * FROM hotel.Books_Lent
  WHERE book_id = b.id
);

SELECT id, Title FROM hotel.Books AS b
WHERE NOT EXISTS (
  SELECT * FROM hotel.Books_Lent
  WHERE book_id = b.id 
);

-- 2) Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT * FROM hotel.Books_Lent;
SELECT * FROM Books;
SELECT
  id,
  Title
FROM hotel.Books AS b
WHERE EXISTS (
  SELECT * FROM hotel.Books_Lent
  WHERE book_id = b.id
  HAVING b.title LIKE '%lost%'
);

SELECT
  id,
  Title
FROM hotel.Books AS b
WHERE EXISTS (
  SELECT * FROM hotel.Books_Lent
  WHERE book_id = b.id AND b.title LIKE '%lost%'
);

-- 3) Usando a tabela carsales e customers, exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Customers;

SELECT
  `Name`
FROM hotel.Customers AS c
WHERE EXISTS (
  SELECT * FROM hotel.CarSales
  WHERE CustomerId = c.CustomerId
);

-- 4) Usando o comando EXISTS em conjunto com JOIN e as tabelas cars, customers e carsales, exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT * FROM Customers LIMIT 100;
SELECT * FROM Cars LIMIT 100;
SELECT * FROM CarSales LIMIT 100;

-- SELECT
--   t1.Name,
--   t2.Name
-- FROM hotel.Customers AS t1
-- INNER JOIN hotel.Cars AS t2
-- ON t1.CustomerId = t2.id;


SELECT 
    cus.name,
    COUNT(car.name) AS 'quantity_of_cars',
    CONCAT(car.name) AS 'car_model'
FROM
    hotel.Cars AS car
        INNER JOIN
    hotel.Customers AS cus

WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = cus.CustomerId
                AND carID = car.ID)
GROUP BY cus.name, car.name;
