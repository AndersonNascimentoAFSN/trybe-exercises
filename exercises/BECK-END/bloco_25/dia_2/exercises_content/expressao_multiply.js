// Expressão $multiply

/*
  A expressão $multiply multiplica dois valores numéricos. Esses valores devem ser passados num array, como nas outras expressões anteriores.
*/

use storage;

db.sales.drop();
db.sales.insertMany([
  { _id: 1, item: "abc", price: 10, quantity: 2, date: ISODate("2014-03-01T08:00:00Z") },
  { _id: 2, item: "jkl", price: 20, quantity: 1, date: ISODate("2014-03-01T09:00:00Z") },
  { _id: 3, item: "xyz", price: 5, quantity: 10, date: ISODate("2014-03-15T09:00:00Z") }
]);

db.sales.aggregate([
  {
    $project: { 
      date: 1,
      item: 1,
      total: {
        $multiply: ["$price", "$quantity"]
      }
    }
  }
]);

// Para Fixar
/* Utilizando o banco de dados storage , faça os seguintes exercícios: */
use storage;

// 1) Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;
db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      total: {
        $multiply: ["$sale_price", "$quantity"]
      }
    }
  }
]);

// 2) Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido.

db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      gain: {
        $abs: {
          $multiply: [
            { $subtract: ["$purchase_price", "$sale_price"] },
            "$quantity"
          ]
        }
      }
    }
  }
]);
