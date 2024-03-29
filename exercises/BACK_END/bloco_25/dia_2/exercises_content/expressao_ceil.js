// Expressão $ceil

/*
  A expressão $ceil basicamente arredonda o número especificado para "cima". Ela executa a função matemática teto que converte um número x no número inteiro mais próximo, que seja maior ou igual a x.
*/

use storage;
db.samples.drop();
db.samples.insertMany([
  { _id: 1, value: 9.25 },
  { _id: 2, value: 8.73 },
  { _id: 3, value: 4.32 },
  { _id: 4, value: -5.34 }
]);

db.samples.aggregate([
  { 
    $project: {
      value: 1,
      value: 1,
      ceilingValue: {
        $ceil: "$value"
      }
    }
  }
]);

