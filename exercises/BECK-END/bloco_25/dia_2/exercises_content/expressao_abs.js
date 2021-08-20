// Expressão $abs

/* A expressão $abs retorna o valor absoluto de um número. */

use storage;

db.ratings.insertMany([
  { _id: 1, start: 5, end: 8 },
  { _id: 2, start: 4, end: 4 },
  { _id: 3, start: 9, end: 7 },
  { _id: 4, start: 6, end: 7 }
]);

// Aplicando a expressão $abs combinada com a expressão $subtract no estágio $project , podemos retornar a diferença entre os valores dos campos start e end:

db.ratings.aggregate([
  {
    $project: {
      delta: {
        $abs: { $subtract: ["$start", "$end"] }
      }
    }
  }
]);

// Para Fixar

/*
  Utilizando o banco de dados storage , faça o seguinte exercício: 
*/

// 1) Calcule o valor absoluto do lucro total de cada produto.

use storage;

db.products.aggregate([
  {
    $project: {
      name: 1,
      gain: {
        $abs: { $subtract: ["$purchase_price", "$sale_price"] }
      }
    }
  }
]);

