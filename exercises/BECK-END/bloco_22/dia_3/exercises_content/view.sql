/* O que é uma VIEW?

Uma VIEW é nada mais nada menos que uma tabela temporária no seu banco de dados, que pode ser consultada como qualquer outra. Porém, por ser uma tabela temporária, ela é criada a partir de uma query que você definir. */

-- Anatomia de uma VIEW
-- Defina em qual banco a view será criada
USE nome_do_banco_de_dados;
-- Comando para criar a view
CREATE VIEW nome_da_view AS query;


-- Exemplo

CREATE VIEW top_10_customers AS
  SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
  FROM sakila.payment p
  INNER JOIN sakila.customer c ON p.customer_id = c.customer_id
  GROUP BY customer_id
  ORDER BY total_amount_spent DESC
  LIMIT 10;

SELECT * FROM top_10_customers;

DROP VIEW nome_da_view;