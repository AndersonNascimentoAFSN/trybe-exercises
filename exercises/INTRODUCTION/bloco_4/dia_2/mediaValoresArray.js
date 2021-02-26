/* Exercício 3 - O objetivo deste programa é imprimir no console a média aritmética dos valores contidos no array. */ 

/* 
  Algoritmo feito para aula 4.4: 

  Algoritmo:
    - Adicionar um array com os valores numéricos armazenados nele;
    - Criar uma variável com valor 0, chamada currentNumber, por exemplo,  - que armazenará um valor dos presentes no array;
    - Criar uma variável com o valor 0, chamada sum, por exemplo, que armazenará a soma dos valores presentes no array;
    - Utilizar alguma estrutura de repetição, como, for, while, para - percorrer o array;
    - Incrementar a variável currentNumber com o valor armanezado no - índice atual do array;
     - Incrimentar a variável sum com o valor dela mesma mais o valor da variável currentNumber
     - Fora do loop adicionar o valor da variável sum dividido pelo números de elementos do array a variável mean;
    - Imprimir o valor da variável mean no console;
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let sum = null;
let mean = null;
const numberElements = numbers.length


let option = 'reduce';

switch(option) {

  case 'forEach':
    // // Exercício 3 - Usando forEach:
    sum = 0;
    mean = 0;

    numbers.forEach((number) => {
      return sum += number;;
    })
    mean = sum / numberElements;
    console.log(mean.toFixed(2));
    break;

  case 'reduce':
    // // Exercício 3 - Usando reduce 
    mean = 0;
    sum = 0;
    mean = numbers.reduce((acumulador, atual) => {
      return acumulador + atual;
    });
    mean = mean / numberElements;
    console.log(mean.toFixed(2));
    break;

  default:
    console.log('Option not correct');
}
