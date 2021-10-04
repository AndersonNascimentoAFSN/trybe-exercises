-- ############Prática COUNT #########################

SELECT COUNT(DISTINCT first_name, last_name) FROM sakila.actor;

SELECT COUNT(address2) FROM sakila.address;

SELECT COUNT(district) FROM sakila.address WHERE district = 'Alberta';

-- Essa é a tabela staff do banco de dados sakila . Como você poderia responder às seguintes questões?

-- Quantas senhas temos cadastradas nessa tabela?
  SELECT COUNT(password) FROM sakila.staff;

-- Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT COUNT(staff_id) FROM sakila.staff;

-- Quantos emails temos cadastrados nessa tabela?
SELECT COUNT(email) FROM sakila.staff;