// Programa para exibir o maior valor entre 3 fornecidos. 

function higherNumber(number1, number2, number3) {
  let higher = (number1 > number2) ? number1 : number2;
  higher = (higher > number3) ? higher : number3;
  return higher;
}

let higher = higherNumber(9, 8, 3);
console.log(higher);