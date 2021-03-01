// Programa para exibir o maior valor entre 2 fornecidos.

function higherNumber(number1, number2) {
  let higher = (number1 > number2) ? number1 : number2;
  return higher;
}

let higher = higherNumber(4, 6);
console.log(higher);