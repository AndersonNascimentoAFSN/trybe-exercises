/* Exercício 4 - O objetivo deste programa é utilizar o programa do exercício 3 como base, mas acrescentar uma condicional para testar se o valor é maior ou menor que 20, apresentando um texto na console para informar isso. */ 

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
    -Utilizar uma estrutura condicional para averiguar se o número é maior que 20;
    - Imprimir no console um texto informando se é maior que 20, ou menor que 20;
 */



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = null;
let mean = null;
const numberElements = numbers.length


// // Exercício 4 


numbers.forEach((number) => {
  return sum += number;;
})
mean = sum / numberElements;

if(mean > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}



