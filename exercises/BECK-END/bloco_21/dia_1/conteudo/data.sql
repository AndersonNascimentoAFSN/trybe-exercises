-- ### Trabalhando com datas
SELECT CURRENT_DATE();

SELECT NOW();

SELECT DATEDIFF('2020-01-31', '2020-01-01');

SELECT TIMEDIFF('08:30:10', '09:30:10');


SET @data_cadastro = NOW();
SELECT DATE(@data_cadastro);
SELECT YEAR(@data_cadastro);
SELECT MONTH(@data_cadastro);
SELECT DAY(@data_cadastro);
SELECT HOUR(@data_cadastro);
SELECT MINUTE(@data_cadastro);
SELECT SECOND(@data_cadastro);

SELECT YEAR(CURRENT_DATE());
SELECT HOUR(NOW());


-- ### Para Fixar - Para fixar, responda como seria possível encontrar as seguintes informações:

-- 1) Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
SELECT DATEDIFF('2030-01-20', NOW());

-- 2) Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.

SELECT TIMEDIFF('10:25:45', '11:00:00');
