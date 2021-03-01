/* Exercício 4- Programa pirâmide feito de asteríscos 
    Programa: 
      Programa pirâmide feito de asteríscos;
    Objetivo: 
      O objetivo deste exercício é fazer uma pirâmide de asteríscos. 
    Algoritmo: 
      Criar a variável number contendo um número, que representará a quantidade de vezes que os astirísticos aparecerão no console;
      A quantidade de asteríscos sempre é um número ímpar, então criar um for que gere apenas números neste intervalo, bem como criar um if para garantir que o número digitado é sempre ímpar;
      A quantidade de espaços nos lados esquerdo e direito é igual a divisão inteira do número. Esta quantidade vai decrescendo de um em um;

      
      
      
    */

  

let quantityAsterisks = 5;
let numberSpaces = parseInt(quantityAsterisks / 2);
let asterisk = '*';
let space = ' ';
let stringEnd = '';

for(let index = 1; index <= quantityAsterisks; index += 2){
  stringEnd = space.repeat(numberSpaces) + asterisk.repeat(index) + space.repeat(numberSpaces);
  numberSpaces -= 1;
  console.log(stringEnd);
}


