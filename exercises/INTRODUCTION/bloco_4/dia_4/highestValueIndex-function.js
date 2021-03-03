/* Exercício 2 - O objetivo deste programa é retornar de um array o índice do maior valor*/ 

/* 
  Algoritmo:
    - Adicionar um array contendo alguns números;
    - Adicionar uma função que receberá como parâmetro o array;
    - Criar uma variável para armazenar o maior valor, recebendo o valor do índice 0;
    - Criar um laço de repetição para percorrer o array;
    - Criar uma variável para para armazenar o valor do índice atual;
    - Comparar o valor da variável do índice atual com o valor da variável de índice atual;
    - Criar uma condicional para averiguar qual o maior, armazenar o maior valor na variável para o maior valor;
    - Fora do loop criar um variável que recebe o índice do maior valor;
    - Fora do loop fazer a função retornar este valor;
    - 
 */

 const numbers = [2, 3, 6, 7, 10, 1];

 function highestValueIndex(arrayNumbers) {
  let higherNumber = arrayNumbers[0];
  
  for(let index in arrayNumbers){
    let currentNumber = arrayNumbers[index]

    if(currentNumber > higherNumber){
      higherNumber = currentNumber;
    }

  };

  let indexHigherNumber = arrayNumbers.indexOf(higherNumber);
  return indexHigherNumber;
 }

 console.log(highestValueIndex(numbers));
