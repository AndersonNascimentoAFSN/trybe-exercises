// Operador $project

/* 
  O operador $project tem como uma de suas funções passar adiante no pipeline apenas alguns campos dos documentos vindos do estágio anterior, fazendo isso por meio de uma "projeção", como no método find({}, { $project }) . Mas aqui temos uma diferença: esses campos podem ser novos, sendo resultado de um cálculo ou de uma concatenação. 
*/

db.transactions.aggregate(
  [
    {
      $project: {
        _id: 0,
        bank: 1,
        value: 1
      }
    }
  ]
);

/* Veja alguns exemplos, considerando este documento da coleção books. */
db.books.insertOne(
  {
    _id: 1,
    title: "A Fundação",
    isbn: "0001122223334",
    author: { last: "Asimov", first: "Isaac" },
    copies: 5
  }
)

// Exemplo 1: Incluindo campos específicos

db.books.aggregate(
  [
    {
      $project: {
        title: 1,
        author: 1
      }
    }
  ]
);

// Exemplo 2: Excluindo o campo _id

db.books.aggregate(
  [
    {
      $project: {
        _id: 0,
        title: 1,
        author: 1,
      }
    }
  ]
);

// Exemplo 3: Excluindo outros campos

db.books.aggregate(
  [
    {
      $project: {
        copies: 0
      }
    }
  ]
);

// Exemplo 4: Excluindo campos em subdocumentos

db.books.aggregate([
  {
    $project: {
      "author.first": 0,
      copies: 0
    }
  }
]);

// Exemplo 5: Incluindo campos calculados


db.books.aggregate([
  {
    $project: {
      title: 1,
      isbn: {
        prefix: { $substr: ["$isbn", 0, 3] },
        group: { $substr: ["$isbn", 3, 2] },
        publisher: { $substr: ["$isbn", 5, 4] },
        title: { $substr: ["$isbn", 12, 1] }
      },
      lastName: "$author.last",
      copiesSold: "$copies"
    }
  }
]);
