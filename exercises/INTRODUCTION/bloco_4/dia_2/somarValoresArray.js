/* Exercício 2 - O objetivo deste programa é percorrer um determinado Array e exibir na console a soma de todos os números armazenados nele. */ 

/* 
  Algoritmo feito para aula 4.4: 

  Algoritmo:
    - Adicionar um array com os valores numéricos armazenados nele;
    - Criar uma variável com valor 0, chamada currentNumber, por exemplo,  - que armazenará um valor dos presentes no array;
    - Criar uma variável com o valor 0, chamada sum, por exemplo, que armazenará a soma dos valores presentes no array;
    - Utilizar alguma estrutura de repetição, como, for, while, para - percorrer o array;
    - Incrementar a variável currentNumber com o valor armanezado no - índice atual do array;
     - Incrimentar a variável sum com o valor dela mesma mais o valor da variável currentNumber
    - Imprimir o valor da variável sum no console;
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let option = 'reduce';
let sum = null;

switch(option) {

  case 'forEach':
    // // Exercício 2 - Usando forEach:
    sum = 0;
    numbers.forEach((item) => {
      sum += item;
    })
    console.log(sum);
    break;

  case 'for':
    break;
    // // Exercício 2 - Usando for: 
    sum = 0;
    for(let index = 0; index < numbers.length; index += 1){
      sum += numbers[index];
    }
    console.log(sum);

  case 'reduce':
    // // Exercício 2 - Usando reduce 
    sum = 0;
    sum = numbers.reduce((acamulador, valorAtual) => {
      return acamulador + valorAtual;
    })
    console.log(sum);
    break;

  default:
    console.log('Option not correct');
}


