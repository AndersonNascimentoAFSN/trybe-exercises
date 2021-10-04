// Aplicando condições ao Join com $lookup

/* Aprendemos a base do operador $lookup no último conteúdo, mas você pode incrementar ainda mais adicionando a ele expressões mais elaboradas e aplicando vários operadores que você já conhece. Também pode referenciar campos dos documentos de entrada para serem utilizados nas condições e até mesmo montar um pipeline dentro dele.
Para isso, existem mais dois parâmetros, ambos opcionais:
let : define as variáveis que serão utilizadas no estágio pipeline dentro do $lookup . É necessário porque o estágio pipeline não consegue acessar diretamente os campos dos documentos de entrada, então esses campos precisam ser definidos previamente e transformados em variáveis;
pipeline : define as condições ou o pipeline que será executado na coleção de junção. Se você quiser todos os documentos da coleção de junção, é só especificá-lo como vazio ( [] ). */

use example_db;
db.orders.insertMany([
  { _id: 1, item: "almonds", price: 12, ordered: 2 },
  { _id: 2, item: "pecans", price: 20, ordered: 1 },
  { _id: 3, item: "cookies", price: 10, ordered: 60 }
]);

use example_db;
db.warehouses.insertMany([
  { _id: 1, stock_item: "almonds", warehouse: "A", instock: 120 },
  { _id: 2, stock_item: "pecans", warehouse: "A", instock: 80 },
  { _id: 3, stock_item: "almonds", warehouse: "B", instock: 60 },
  { _id: 4, stock_item: "cookies", warehouse: "B", instock: 40 },
  { _id: 5, stock_item: "cookies", warehouse: "A", instock: 80 }
]);

db.orders.aggregate([
  {
    $lookup: {
      from: 'warehouses',
      let: { order_item: "$item", order_qty: "$ordered" },
      pipeline: [
        { 
          $match: {
            $expr: {
              $and: [ 
                { $eq: ["$stock_item", "$$order_item"] },
                { $gte: ["$instock", "$$order_qty"] }
              ]
            }
          }
        },
        {
          $project: {
            stock_item: 0,
            _id: 0
          }
        }
      ],
      as: "stockdata",
    }
  }
]);

// Para Fixar

/* Utilizando o banco de dados agg_example , adicione a seguinte collection e faça os exercícios: */

use agg_example;
db.clients.drop();
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

db.transactions.drop();
db.transactions.insertMany([
  { value: 5900, from: "Dave America", to: "Ned Flanders", bank: 'International' },
  { value: 1000, from: "Mark Zuck", to: "Edna Krabappel", bank: 'FloridaBank' },
  { value: 209, from: "Lisa Simpson", to: "Dave America", bank: 'bankOfAmerica' },
  { value: 10800, from: "Arnold Schuz", to: "Mark Zuck", bank: 'JPMorgan' },
  { value: 850, from: "Barney Gumble", to: "Lisa Simpson", bank: 'Citigroup' },
  { value: 76000, from: "Ned Flanders", to: "Edna Krabappel", bank: 'JPMorgan' },
  { value: 1280, from: "Dave America", to: "Homer Simpson", bank: 'Citigroup' },
  { value: 7000, from: "Arnold Schuz", to: "Ned Flanders", bank: 'International' },
  { value: 59020, from: "Homer Simpson", to: "Lisa Simpson", bank: 'International' },
  { value: 100, from: "Mark Zuck", to: "Barney Gumble", bank: 'FloridaBank' },
]);

// 1) Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: {
        client_name: "$name",
      },
      pipeline: [
        { 
          $match: {
            $expr: {
              $eq: ["$from", "$$client_name"]
            }
          }
        },
        {
          $project: {
            _id: 0,
            from: 0,
          }
        }

      ],
      as: 'transactions'
    },
  },
]);

// 2) Selecione os quatro primeiros clientes com as suas respectivas transações recebidas ordenados pelo estado em ordem alfabética;
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { 
        client_name: "$name",
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$$client_name", "$from"]
            }
          }
        },
        {
          $project: {
            _id: 0,
            from: 0,
          }
        }
      ], 
      as: 'transactions'
    },
  },
  { 
    $sort: {
      State: 1
    }
  },
  {
    $limit: 4
  }
]);

// 3) Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
db.clients.aggregate([
  { 
    $match: {
      State: /florida/i
    }
  },
  {
    $lookup: {
      from: "transactions",
      let: {
        client_name: "$name",
      },
      pipeline: [
        { 
         $match: {
           $expr: {
             $eq: ["$$client_name", "$to"]
           }
         }
        },
        {
          $project: {
            _id: 0,
            to: 0,
          }
        }
      ],
      as: "received_transactions"
    }
  }
]);

// Antes de avançarmos no conteúdo, crie um banco de dados chamado storage e rode a query abaixo. Ele será necessário para os próximos exercícios de fixação.
use storage;
db.products.insertMany([
  { "name": "Ball", "purchase_price": 7.6, "taxes": 1.9, "sale_price": 12.5, "quantity": 5 },
  { "name": "Baseball bat", "purchase_price": 18.5, "taxes": 5.3, "sale_price": 39.9, "quantity": 12 },
  { "name": "Sneakers", "purchase_price": 10.4, "taxes": 1.50, "sale_price": 14.9, "quantity": 3 },
  { "name": "Gloves", "purchase_price": 2.85, "taxes": 0.90, "sale_price": 5.70, "quantity": 34 },
  { "name": "Jacket", "purchase_price": 28.9, "taxes": 10.80, "sale_price": 59.9, "quantity": 20 },
  { "name": "Mousepad", "purchase_price": 16.6, "taxes": 3.40, "sale_price": 29.9, "quantity": 8 },
  { "name": "Monitor", "purchase_price": 119.9, "taxes": 39.20, "sale_price": 240.6, "quantity": 11 },
]);