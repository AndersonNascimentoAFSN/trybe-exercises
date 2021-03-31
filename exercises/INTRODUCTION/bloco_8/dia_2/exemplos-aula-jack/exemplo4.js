const pizzas = ['Frango com Catupiry', 'Marguerita', 'Gratinada', 'Quatro Queijos'];
const numbers = [11, 2, 6, 4, 5, 3, 7, 8, 9, 10, 1];

// console.log(pizzas.sort());

console.log(numbers.sort((number1, number2) => {
  return  number2 - number1;
}));