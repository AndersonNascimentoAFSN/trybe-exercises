// Expressão $divide

/* 
  A expressão $divide, como o próprio nome sugere, divide dois valores. O primeiro argumento é o dividendo, e o segundo é o divisor.
*/

use storage;

db.planning.insertMany([
  { _id: 1, name: "A", hours: 80, resources: 7 },
  { _id: 2, name: "B", hours: 40, resources: 4 }
]);

/* A agregação abaixo utiliza o $divide para dividir o valor do campo hours por 8 e calcular o número de dias de trabalho ( workdays ): */

db.planning.aggregate([
  {
    $project: {
      name: 1,
      workdays: {
        $divide: ["$hours", 8]
      }
    }
  }
]);


// Para Fixar
/* Utilizando o banco de dados storage , faça o seguinte exercício: */
use storage;

// 1) Calcule qual será o preço de venda de cada produto caso haja uma promoção de 50% de desconto.

db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      sale_price_new: {
        $subtract: [
          "$sale_price",
          {
            $multiply: [
              {
                $divide: [50, 100]
              },
              "$sale_price"
            ]
          }
        ]
      }
    }
  }
]);
