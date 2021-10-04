// Expressão $round

/* 
  A expressão $round retorna o número inteiro mais próximo do valor atual e também permite definir a quantidade de casas decimais que você quer manter ao arredondar.
*/

db.samples.aggregate([
  {
    $project: { 
      value: 1,
      roundedValue: {
        $round: ["$value"]
      }
    }
  }
]);

db.samples.aggregate([
  { $project: { value: 1, roundedValue: { $round: ["$value", 1] } } }
]);


// Para Fixar

/*
  Utilizando o banco de dados storage, faça os seguintes exercícios:
*/

// 1) Retorne o menor número inteiro relativo ao preço de venda de cada produto;
db.products.aggregate([
  {
    $project: {
      name: 1,
      sale_price: 1,
      floorValue: {
        $floor: ["$sale_price"]
      }
    }
  }
]);

// 2) Retorne o maior número inteiro relativo ao lucro total sobre cada produto.
db.products.aggregate([
  {
    $project: {
      name: 1,
      sale_price: 1,
      purchase_price: 1,
      ceil_gain: {
        $ceil: [
          {
            $subtract: ["$sale_price", "$purchase_price"]
          }
        ]
      }
    }
  }
]);
