SELECT * FROM hr.employees;

-- ### Exercícios
-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT 
  MAX(SALARY) AS `Maior salário`
FROM hr.employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT 
  MAX(SALARY) - MIN(SALARY)
FROM hr.employees;

-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT * FROM hr.employees;
SELECT  JOB_ID,
  COUNT(JOB_ID) AS `QUANTITY_OF_SALARY`,
  AVG(SALARY) AS `AVERAGE_SALARY`
FROM hr.employees
GROUP BY JOB_ID
ORDER BY AVERAGE_SALARY
;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT 
  SUM(SALARY) AS 'COST_SALARY_PAYMENT'
FROM hr.employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT 
  ROUND(MAX(SALARY), 2) AS `MAX_SALARY`,
  ROUND(MIN(SALARY), 2) AS `MIN_SALARY`,
  ROUND(SUM(SALARY), 2) AS `SUM_SALARY`,
  ROUND(AVG(SALARY), 2) AS `AVG_SALARY`
FROM hr.employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, 
  COUNT(JOB_ID) AS `QUANTITY` 
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG'
;

SELECT JOB_ID, COUNT(*) AS `TOTAL`
FROM hr.employees
WHERE JOB_ID = 'IT_PROG';

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT JOB_ID,
  COUNT(JOB_ID) AS `QUANTITY`,
  SUM(SALARY) AS `TOTAL`
FROM hr.employees
GROUP BY JOB_ID
ORDER BY TOTAL DESC;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID,
  COUNT(JOB_ID) AS `QUANTITY`,
  SUM(SALARY) AS `TOTAL`
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG'
ORDER BY TOTAL DESC;

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID,
  AVG(SALARY) AS `AVERAGE_SALARY`
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY AVERAGE_SALARY DESC
;

SELECT JOB_ID,
  AVG(SALARY) AS `AVERAGE_SALARY`
FROM hr.employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID
ORDER BY AVERAGE_SALARY DESC
;

-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.
SELECT DEPARTMENT_ID,
  ROUND(AVG(SALARY), 2) AS `AVERAGE_SALARY`,
  COUNT(DEPARTMENT_ID) AS `NUMBER_OF_EMPLOYEES`
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING NUMBER_OF_EMPLOYEES > 10
;

-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.

UPDATE hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE '515%';

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT *
FROM hr.employees
WHERE FIRST_NAME LIKE '________%';

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT
  employee_id,
  first_name,
  YEAR(hire_date) AS hire_year
FROM hr.employees;

-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT
  employee_id,
  first_name,
  DAY(hire_date) AS `hire_day`
FROM hr.employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT
  employee_id,
  first_name,
  MONTH(hire_date) AS `hire_month`
FROM hr.employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT
  UCASE(CONCAT(first_name, ' ', last_name)) AS `FULL_NAME`
FROM hr.employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT
  last_name,
  hire_date
FROM hr.employees
WHERE DATE(hire_date) LIKE '1987-07-%';

-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias).

SELECT
  first_name,
  last_name,
  DATEDIFF(NOW(), hire_date) AS `days_worked`
FROM hr.employees;
