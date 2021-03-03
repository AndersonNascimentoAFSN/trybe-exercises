/* Exercício 6 - O objetivo deste programa é retornar o somatório de todos os números de 1 até N */ 

/* 
Algoritmo:
  - Adicionar uma variável contendo um número;
  - Criar um laço de repetição que repetirá até o valor armazenado na variável acima;
  - criar uma variável que armazenará a soma dos index das repetições do loop acima;
  - Fazer a função retornar o valor desta variável;
  - 
 */

let number = 5;

function sumIndexNumbers(){
  let sumIndex = 0; 
  for(let index = 1; index <= number; index += 1){
    sumIndex += index;
  }
  return sumIndex;
}

 console.log(sumNumbers(number));
