// Operador $group

/*
  Este é provavelmente o operador que você mais utilizará nas operações de agregação. Com ele é possível agrupar valores de diversas formas, desde um "distinct" simples até cálculos mais elaborados com a ajuda de outros operadores.
*/

/* 
  Operador de Acumulação

  Para fazer operações sobre os campos de documentos agrupados usamos operadores de acumulação.
  A seguir há uma lista com alguns dos mais utilizados:
    -$addToSet: retorna um array com os valores únicos da expressão para cada grupo;
    -$avg: retorna a média de valores numéricos. Valores não numéricos são ignorados;
    -$first: retorna um valor do primeiro documento de cada grupo;
    $last: retorna um valor do último documento de cada grupo;
    -$max: retorna o maior valor de cada grupo;
    -$sum: retorna a soma de valores numéricos. Valores não numéricos são ignorados. 
*/

db.sales.insertMany([
  {
    _id: 1,
    item: "Código Limpo",
    price: NumberDecimal("10"),
    quantity: NumberInt("2"),
    date: ISODate("2014-03-01T08:00:00Z")
  },
  {
    _id: 2,
    item: "O Homem e Seus Símbolos",
    price: NumberDecimal("20"),
    quantity: NumberInt("1"),
    date: ISODate("2014-03-01T09:00:00Z")
  },
  {
    _id: 3,
    item: "Comunicação Não-Violenta",
    price: NumberDecimal("5"),
    quantity: NumberInt( "10"),
    date: ISODate("2014-03-15T09:00:00Z")
  },
  {
    _id: 4,
    item: "Comunicação Não-Violenta",
    price: NumberDecimal("5"),
    quantity:  NumberInt("20"),
    date: ISODate("2014-04-04T11:21:39.736Z")
  },
  {
    _id: 5,
    item: "Código Limpo",
    price: NumberDecimal("10"),
    quantity: NumberInt("10"),
    date: ISODate("2014-04-04T21:23:13.331Z")
  },
  {
    _id: 6,
    item:"A Coragem de Ser Imperfeito",
    price: NumberDecimal("7.5"),
    quantity: NumberInt("5" ),
    date: ISODate("2015-06-04T05:08:13Z")
  },
  {
    _id: 7,
    item: "A Coragem de Ser Imperfeito",
    price: NumberDecimal("7.5"),
    quantity: NumberInt("10"),
    date: ISODate("2015-09-10T08:43:00Z")
  },
  {
    _id: 8,
    item: "Código Limpo",
    price: NumberDecimal("10"),
    quantity: NumberInt("5" ),
    date: ISODate("2016-02-06T20:20:13Z")
  }
  ]);

// Exemplo 1: Contando o número de documentos

db.sales.aggregate([
  { 
    $group: {
      _id: null,
      count: { $sum: 1 }
    }
  }
]);

/* ***Note que o _id está setado como null , porque nesse caso queremos todos os documentos.  */

// Exemplo 2: Retornando valores distintos

db.sales.aggregate([
  { 
    $group: {
      _id: "$item",
      count: { $sum: 1 }
    }
  }
]);

// Exemplo 3: Somando valores

db.sales.aggregate([
  {
    $group: {
      _id: "$item",
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  }
]);

// Exemplo 4: Having (do Mysql), combinando estágios no aggregate

/* Também é possível realizar operações equivalentes ao HAVING do SQL , que nada mais é que um filtro depois de um agrupamento. Por exemplo, se você quiser manter o agrupamento anterior, mas saber apenas as vendas que possuem valores maiores do que 100 , é só adicionar mais um estágio no pipeline: */

db.sales.aggregate([
  {
    $group: {
      _id: "$item",
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  },
  {
    $match: { "totalSaleAmount": { $gte: 100}}
  }
]);

// Exemplo 5: Agrupando por null

/* 
  Você pode executar operações matemáticas em todos os documentos de uma coleção. Basta passar null no _id e seguir com os operadores de acumulação. 
*/

db.sales.aggregate([
  {
    $group: {
      _id: null,
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      },
      averageQuantity: { $avg: "$quantity" },
      count: { $sum: 1 }
    }
  }
]);


// Para Fixar

/* 
  Utilizando o banco de dados agg_example e a coleção transactions , faça os exercícios:
*/

// 1) Selecione todos os bancos, ou seja, valores do campo bank;
db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
    },
  }, 
  {
    $project: {
      bankName: "$_id",
      _id: 0,
    }
  }
]);

// 2) Selecione o valor total das transações em cada banco e quantas são;
db.transactions.aggregate([
  { 
    $group: {
      _id: "$bank",
      qtyOfTransactions: { $sum: 1 },
      totalValue: { $sum: "$value" }
    },
  },
  {
    $project: {
      _id: 0,
      bankName: "$_id",
      qtyOfTransactions: "$qtyOfTransactions",
      totalValue: "$totalValue",
    }
  }
]);

// 3) Selecione o valor total de transações;
db.transactions.aggregate([
  {
    $group: {
      _id: null,
      totalOfTransactions: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0
    }
  }
]);

// 4) Selecione os bancos que têm o valor total de transações maior que 1000.

db.transactions.aggregate([
  { 
    $group: {
      _id: "$bank",
      total: {
        $sum: "$value"
      }
    },
  },
  {
    $match: { 
      total: { $gt: 1000 }
    }
  },
  {
    $project: {
      _id: 0,
      bankName: "$_id",
      total: "$total",
    }
  }
]);
