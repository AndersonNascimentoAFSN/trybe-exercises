/* Exercício 1 - O objetivo deste programa é descobrir se uma string é Palíndromo, ou seja, palavras, números ou frases que podem ser lidas da esquerda para direita ou da direita para a esquerda permanecendo com o mesmo sentido*/ 

/* 
  Algoritmo:
    - Adicionar uma variável com o valor da palavra;
    - Criar uma função para averiguar se é ou não é políndromo;
    - Nesta função criar uma variável que conterá o inverso da string armazenada na primeira variável;
    - Criar um laço de repetição para inverter a string;
    - Criar uma condicional para verificar se as strings possuem o mesmo conteúdo;
 */

let name = 'arara';

function checkPalindrome(name) {
  let newName = '';
  for(let index = name.length - 1; index >= 0; index -= 1){
    newName += name[index];
  }
  if(name === newName){
    return true;
  } else {
    return false
  }
}

console.log(checkPalindrome(name));