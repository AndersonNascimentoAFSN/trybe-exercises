// Expressão $add

/*
  Com a expressão $add, é possível somar valores numéricos ou datas. Se um dos argumentos for do tipo date, o outro argumento será tratado como milissegundos e adicionado à data. 
*/

use egg_example;
db.sales.drop();
db.sales.insertMany([
  { _id: 1, item: "abc", price: 10, fee: 2, date: ISODate("2014-03-01T08:00:00Z") },
  { _id: 2, item: "jkl", price: 20, fee: 1, date: ISODate("2014-03-01T09:00:00Z") },
  { _id: 3, item: "xyz", price: 5,  fee: 0, date: ISODate("2014-03-15T09:00:00Z") }
]);

db.sales.aggregate([
  {
    $project: { 
      item: 1,
      total: {
        $add: ["$price", "$fee"]
      }
    }
  }
]);

/* Para valores do tipo date , um dos argumentos sempre será tratado como milissegundos. Imagine que você queira adicionar 3 dias ao valor do campo date . Você consegue fazer de duas maneiras. A primeira é passar em um dos argumentos o número equivalente a 3 dias em milissegundos ( 2,592e+8 ). A segunda é criar uma expressão que devolva esse número: */

db.sales.aggregate([
  { 
    $project: { 
      item: 1,
      billing_date: {
        $add: ["$date", 2.592e+8]
      }
    }
  }
]);


db.sales.aggregate([
  {
    $project: {
      item: 1,
      billing_date: {
        $add: ["$date", 3 * 24 * 60 * 60000]
      }
    }
  }
]);

// Para Fixar

/* Utilizando o banco de dados storage, faça o seguinte exercício: */

// 1) Calcule qual o custo total de cada produto, considerando o preço de compra e os impostos.

db.products.aggregate([
  {
    $project: {
      _id: 0, name: 1, total_cost: { 
       $multiply: 
        [
          {
            $add: ["$taxes", "$purchase_price"],
          }, "$quantity"
        ]
      }
    }
  }
]);

