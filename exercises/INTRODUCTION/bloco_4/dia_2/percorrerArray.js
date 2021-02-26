/* Exercício 1 - O objetivo deste programa é percorrer um determinado Array e exibir na console os números armazenados nele. */ 

/* 
  Algoritmo feito para aula 4.4: 

  Algoritmo:
    - Adicionar um array com os valores numéricos armazenados nele;
    - Criar uma variável com valor 0, chamada currentNumber, por exemplo,  - que armazenará um valor dos presentes no array;
    - Utilizar alguma estrutura de repetição, como, for, while, para - percorrer o array;
    - Incrementar a variável CurrentNumber com o valor armanezado no - índice atual do array;
    - Imprimir o valor desta variável no console;
 */


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let option = 'forEach';

switch(option) {
  case 'forEach':
    // Exercício 1 - Usando forEach:
    numbers.forEach((number) => {
      console.log(number);
    });
    break;
  case 'for':
    // Exercício 1 - Usando for: 
    for(let index = 0; index < numbers.length; index += 1){
      let currentNumber = numbers[index]
      console.log(currentNumber);
    }
    break;
  case 'forIn':
    // Exercício 1 - Usando for in: 
    for(let index in numbers){
      console.log(numbers[index]);
    } 
    break;
/* Note: for...in não deve ser usado para iteração em uma Array onde a ordem é importante, visto que ele iterage em uma ordem arbitrária. */
    case 'while':
    // Exercício 1 - Usando while:
      let index = 0;
      while(index < numbers.length){
        console.log(numbers[index]);
        index += 1;
      }
      break;
    case 'doWhile': 
    // Exercício 1 - Usando do while:
      index = 0;
      do{
        console.log(numbers[index]);
        index += 1;
      }
      while(index < numbers.length);
    default:
      console.log('Option not correct');
}













