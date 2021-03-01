/* Exercício 1- Programa quadrado feito de asteríscos 
    Programa: 
      Quadrado feito de asteríscos;
    Objetivo: 
      O objetivo deste exercício é fazer um quadrado de asteríscos. A quantidade de asteríscos depende do número informado na variável number
    Algoritmo: 
      Criar a variável number contendo um número, que representará a quantidade de vezes que os astirísticos aparecerão no console;
      Criar a variável asterisk que multiplicará a string '*' pelo número de asteríscos; 
      Utilizar um laço de repetição para repetir o número de vezes armazenado na variável number;
      exibir no console os asteriscos a cada iteração;
    */

// let number = 5;
// let asterisk = '*';
// for (let count = 1; count <= number; count += 1) {
//   console.log(asterisk.repeat(number));
// }


let number = 5;
let asterisk = '';

for (let count = 1; count <= number; count += 1) {
  asterisk += '*';
}

for (let count = 1; count <= number; count += 1) {
  console.log(asterisk);
}