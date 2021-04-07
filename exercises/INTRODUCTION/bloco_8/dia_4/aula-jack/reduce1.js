const numbers = [2, 3, 4, 6, 8, 12, 24];

let sumWithFor = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  const element = numbers[index];
  sumWithFor = sumWithFor + element;
}
// console.log(`A soma dos itens do array numbers é: ${sumWithFor}`);

const sumWithReduceCallback = (acc, curr) => acc + curr;
const sumWithReduce = numbers.reduce(sumWithReduceCallback, 0);
console.log(`A soma dos itens do array numbers é: ${sumWithReduce}`);

// const sumEvenNumbers = 