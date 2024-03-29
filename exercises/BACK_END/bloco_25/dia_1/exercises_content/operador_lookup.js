// Operador $lookup

/* 
O operador $lookup foi introduzido na versão 3.2 do MongoDB e vem evoluindo desde então. Com ele, é possível juntar documentos de outra coleção ( join ). Como resultado dessa junção, um elemento do tipo array é adicionado a cada documento da coleção de entrada, contendo os documentos que deram "match" na coleção com a qual se faz o "join".
Existem quatro parâmetros básicos para montar um $lookup:
  -from: uma coleção no mesmo database para executar o join;
  -localField: o campo da coleção de onde a operação de agregação está sendo executada. Será comparado por igualdade com o campo especificado no parâmetro foreingField;
  -foreingField: o campo da coleção especificada no parâmetro from que será comparado com o campo localField por igualdade simples;
  -as: o nome do novo array que será adicionado. 
*/

// orders
db.orders.insertMany([
  { _id: 1, item: "almonds", price: 12, quantity: 2 },
  { _id: 2, item: "pecans", price: 20, quantity: 1 },
  { _id: 3 }
  ]);

  // inventory
db.inventory.insertMany([
  { _id: 1, sku: "almonds", description: "product 1", instock: 120 },
  { _id: 2, sku: "bread", description: "product 2", instock: 80 },
  { _id: 3, sku: "cashews", description: "product 3", instock: 60 },
  { _id: 4, sku: "pecans", description: "product 4", instock: 70 },
  { _id: 5, sku: null, description: "Incomplete" },
  { _id: 6 }
  ]);

// Join com igualdade simples

db.orders.aggregate([
  {
    $lookup: {
      from: "inventory",
      localField: "item",
      foreignField: "sku",
      as: "inventory_docs"
    }
  }
]);

// Para Fixar
/*
  Utilizando o banco de dados agg_example , adicione a seguinte collection e faça os exercícios:
*/

use agg_example;
db.clients.insertMany([
  { name: "Dave America", State: "Florida" },
  { name: "Ned Flanders", State: "Alasca" },
  { name: "Mark Zuck", State: "Texas" },
  { name: "Edna Krabappel", State: "Montana" },
  { name: "Arnold Schuz", State: "California" },
  { name: "Lisa Simpson", State: "Florida" },
  { name: "Barney Gumble", State: "Texas" },
  { name: "Homer Simpson", State: "Florida" },
]);

// Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "transactions_history",
    }
  }
]);

// Selecione quatro clientes com as suas respectivas transações recebidas;
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_history",
    }
  }, 
  {
    $limit: 4,
  }
]);

// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

db.clients.aggregate([
  {
    $match: { State: 'Florida' },
  },
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_history"
    },
  },
]);