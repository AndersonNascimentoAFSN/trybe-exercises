// Fórmula fibonacci: fn = fn-1 + fn-2 
/* 
  => f(5) = f(5 - 1) + f(5 - 2) = 4 e 3 => 5 (Soma do resultado de f(4) e f(3))
  => f(4) = f(4 - 1) + f(4 - 2) = 3 e 2 => 3 (Soma do resultado de f(3) e f(2))
  => f(3) = f(3 - 1) + f(3 - 2) = 2 e 1 => 2 (Soma do resultado de f(2) e f(1))
  => f(2) = f(2 - 1) + f(2 - 2) = 2 e 0 => 1 (Soma do resultado de f(2) e f(0))
*/
const { questionInt} = require('readline-sync');

const fibonacci = (number) => {
  if(number <= 1 ) return 1;
  return fibonacci(number - 1) + fibonacci(number - 2);
};
// 5 => (4 + 3) + 1 = 8

// 5 5
// 4 3
// 3 1
// 2 -1
// 1 -3
// -1 -5

// 4 => (3 + 2) + 1 = 8
// 5 => (4 + 3) + 1 = 8

const nextNumberFibonacci= () => {
  const number = questionInt('Digite um número para descobrir qual o próximo da sequência fibonacci: ');
  return fibonacci(number);
}

console.log(nextNumberFibonacci());
