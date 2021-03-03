/* Exercício 7 - O objetivo deste programa é verificar se uma string está contida no final de outra*/ 

/* 
Algoritmo:
  - Adicionar uma variável contendo a string;
  - Adicionar outra variável contendo um pedaço final da primeira;
  - Adicionar uma função que rebecerá como parâmetro a string e outra contendo possivelmente o seu final;
  - Dentro da função adicionar uma variável que rebeberá as duas últimas letras da string;
  - Fazer uma condição para verificar se a string que contém o final é igual as duas últimas palavras da string principal, retornar true se for verdadeiro;
  - Fazer a função retornar false;
*/

const stringWord = 'trybe';
const stringEnd = 'be';

function stringWordEnd(stringWord, stringEnd){
  let string = stringWord[stringWord.length - 2] + stringWord[stringWord.length -1];
  
  if(string === stringEnd){
    return true;
  }

  return false;
}

console.log(stringWordEnd(stringWord, stringEnd));