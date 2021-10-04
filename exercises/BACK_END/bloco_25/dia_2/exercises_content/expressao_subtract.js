// Expressão $subtract

/*
  Com a expressão subtract, podemos subtrair dois valores numéricos para retornar a diferença entre eles, ou duas datas para retornar a diferença entre elas em milissegundos. O segundo argumento sempre será subtraído do primeiro.
*/

use agg_example;
db.sales.drop();
db.sales.insertMany([
  {
    _id: 1,
    item: "abc",
    price: 10,
    fee: 2,
    discount: 5,
    date: ISODate("2014-03-01T08:00:00Z")
  },
  {
    _id: 2,
    item: "jkl",
    price: 20,
    fee: 1,
    discount: 2,
    date: ISODate("2014-03-01T09:00:00Z")
  }
]);

db.sales.aggregate([
  {
    $project: {
      item: 1,
      total: { 
        $subtract: [
          {
            $add: ["$price", "$fee"],
          },
          "$discount"
        ]
      }
    }
  }
]);


/* É possível subtrair duas datas também. A operação a seguir utiliza a expressão $subtract para subtrair o valor do campo date da data corrente, utilizando a variável de sistema NOW (disponível a partir da versão 4.2 do MongoDB ) e retorna a diferença em milissegundos: */

db.sales.aggregate([
  {
    $project: {
      item: 1,
      dateDifference: {
        $subtract: ["$$NOW", "$date"]
      }
    }
  }
]);

// Alternativamente, você pode utilizar a função Date() para obter a data corrente:

db.sales.aggregate([
  {
    $project: {
      item: 1,
      dateDifference: {
        $subtract: [new Date(), "$date"]
      }
    }
  }
]);

// Você também pode utilizar milissegundos como argumento da subtração. A operação seguinte subtrai 5 minutos do campo date:

db.sales.aggregate([
  {
    $project: {
      item: 1,
      dateDifference: {
        $subtract: ["$date", 5 * 60 * 1000]
      }
    }
  }
]);

// Para Fixar

/* 
  Utilizando o banco de dados storage, faça o seguinte exercício:
*/

// 1) Calcule qual o lucro total de cada produto, considerando o preço de compra, os impostos e seu valor de venda.
use storage;

db.products.aggregate([
  {
    $project: {
      name: 1,
      gain: {
        $subtract: [
          { 
            $multiply: [
              { 
                $add: ["$purchase_price", "$taxes"]
              }, "$quantity"
            ]
          }, "$sale_price"
        ] 
      }
    }
  }
]);
