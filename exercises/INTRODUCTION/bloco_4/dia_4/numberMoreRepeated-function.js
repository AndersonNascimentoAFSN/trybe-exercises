/* Exercício 5 - O objetivo deste programa é retornar de um array de números inteiros o que mais se repete*/ 

/* 
  Algoritmo:
    - Adicionar um array contendo alguns números;
    - Criar um loop for para descobrir o número de repetições de cada número;
    - Criar outro loop for para descobrir qual número de repetição é maior;
    - Obter o index do maior número de repetições do array numbers;
    - 
 */

const numbers = [2, 3, 2, 5, 8, 2, 3];

function numberMoreRepeated(arrayNumbers){
  
  let quantity = [];
  for(let indexColumn = 0; indexColumn < arrayNumbers.length; indexColumn += 1){
    let count = 0;
    for(let indexRow = 0; indexRow < arrayNumbers.length; indexRow += 1){
      if(arrayNumbers[indexColumn] === arrayNumbers[indexRow]){
        count += 1;
      }
    }
    quantity.push(count);
  }

  let higherNumber = quantity[0];
  for(let index = 0; index < quantity.length; index += 1){
    let currentNumber = quantity[index];
    if(currentNumber > higherNumber){
      higherNumber = currentNumber;
    }
  }

  let indexNumber = quantity.indexOf(higherNumber);
  let number = arrayNumbers[indexNumber];
  return number;
}

console.log(numberMoreRepeated(numbers));

