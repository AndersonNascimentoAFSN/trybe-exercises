// Função para somar todos os números pares do array

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Usando for
const sumNumbersEven = (numbersList) => {
  let sum = 0;
  for (let index = 0; index < numbersList.length; index += 1) {
    const element = numbersList[index];
    if (element % 2 === 0) {
      sum += element;
    }
  }
  return sum;
};
// console.log(sumNumbersEven(numbers));

// Usando reduce e filter
const numbersEven = numbers.filter((number) => number % 2 === 0);
const sumNumbersEvenWithFilterReduce = numbersEven.reduce((acc, curr) => acc + curr);
// console.log(sumNumbersEvenWithFilterReduce);

// Usando reduce
const sumNumbersEvenCallback = (acc, curr) => (curr % 2 === 0) ? acc + curr : acc + 0;
const sumNumbersEvenWithReduce = numbers.reduce(sumNumbersEvenCallback, 0);
// console.log(sumNumbersEvenWithReduce);
