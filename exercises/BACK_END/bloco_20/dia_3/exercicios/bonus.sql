-- Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.
SELECT * FROM Scientists.Scientists WHERE Name LIKE '%e%';

-- Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A. Ordene o resultado em ordem alfabética.
SELECT * FROM Scientists.Projects WHERE Code LIKE 'a%' ORDER BY code ASC;

-- Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3 . Ordene o resultado em ordem alfabética.

SELECT code, name FROM Scientists.Projects WHERE code LIKE '%3%' ORDER BY code ASC;

-- Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3 , Ast3 ou Che1.
SELECT * FROM Scientists.AssignedTo WHERE Project in('AeH3' , 'Ast3', 'Che1');

-- Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.
SELECT * FROM Scientists.Projects WHERE Hours > 500 ORDER BY Hours ASC;

-- Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.
SELECT * FROM Scientists.Projects WHERE Hours BETWEEN 251 AND 799 ORDER BY Hours ASC;

-- Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra A.
SELECT name, code FROM Scientists.Projects WHERE name NOT LIKE 'A%';

-- Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.
SELECT * FROM Scientists.Projects WHERE code LIKE '%h%';
