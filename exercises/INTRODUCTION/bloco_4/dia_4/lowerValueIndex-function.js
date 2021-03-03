/* Exercício 3 - O objetivo deste programa é retornar de um array o índice do menor valor*/ 

/* 
  Algoritmo:
    - Adicionar um array contendo alguns números;
    - Adicionar uma função que receberá como parâmetro o array;
    - Criar uma variável para armazenar o menor valor, recebendo o valor do índice 0;
    - Criar um laço de repetição para percorrer o array;
    - Criar uma variável para para armazenar o valor do índice atual;
    - Comparar o valor da variável do índice atual com o valor da variável de índice atual;
    - Criar uma condicional para averiguar qual o menor, armazenar o menor valor na variável para o menor valor;
    - Fora do loop criar um variável que recebe o índice do menor valor;
    - Fora do loop fazer a função retornar este valor;
    - 
 */

 const numbers = [2, 4, 6, 7, 10, 0, -3];

 function lowerValueIndex(arrayNumbers) {
  let lowerNumber = arrayNumbers[0];
  
  for(let index in arrayNumbers){
    let currentNumber = arrayNumbers[index]

    if(currentNumber < lowerNumber){
      lowerNumber = currentNumber;
    }

  };

  let indexLowerNumber = arrayNumbers.indexOf(lowerNumber);
  return indexLowerNumber;
 }

 console.log(lowerValueIndex(numbers));