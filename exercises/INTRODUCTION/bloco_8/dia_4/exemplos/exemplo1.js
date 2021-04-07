// Função para somar todos os valores de um array

// Apenas com for:

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  const element = numbers[index];
  sumNumbers += element;
}
// console.log(sumNumbers);

// Com reduce:

const sumNumbersWithReduce = numbers.reduce((result, number) => result + number, 0);
console.log(sumNumbersWithReduce);