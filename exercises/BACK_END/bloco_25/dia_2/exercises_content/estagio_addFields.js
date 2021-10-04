// Estágio $addFields

/*
  O $addFields é um estágio que adiciona novos campos aos documentos. A saída desse estágio conterá todos os campos existentes nos documentos de entrada e adicionará os novos campos especificados. 
*/

use storage;
db.scores.drop();

db.scores.insertMany([
  {
    _id: 1,
    student: "Maya",
    homework: [10, 5, 10],
    quiz: [10, 8],
    extraCredit: 0
  },
  {
    _id: 2,
    student: "Ryan",
    homework: [5, 6, 5],
    quiz: [8, 8],
    extraCredit: 8
  }
]);

/*
  A operação de agregação abaixo utiliza o $addFields duas vezes para incluir três novos campos nos documentos de saída:
*/

db.scores.aggregate([
  {
    $addFields: {
      totalHomework: {
        $sum: "$homework"
      },
      totalQuiz: { 
        $sum: "$quiz"
      }
    }
  },
  {
    $addFields: {
      totalScore: {
        $add: ["$totalHomework", "$totalQuiz", "$extraCredit"]
      }, 
      totalhk: "$totalHomework" 
    }
  }
]);

// Para Fixar

/*
  Utilizando o banco de dados storage, faça o seguinte exercício:
*/

use storage;

// 1) Calcule o valor total do estoque, considerando que cada produto valha o mesmo que seu preço de venda. Lembre-se da quantidade.

db.products.aggregate([
  {
    $addFields: {
      total_estoque: {
        $multiply: [
          "$sale_price",
          "$quantity"
        ]
      }
    }
  }
]);
