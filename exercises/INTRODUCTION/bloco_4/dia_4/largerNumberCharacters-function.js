/* Exercício 4 - O objetivo deste programa é retornar de um array o nome com maior quantidade de caracteres*/ 
/* 
Algoritmo:
  - Adicionar um array contendo alguns nomes;
  - Adicionar uma função que receberá como parâmetro o array;
  - Criar uma variável para armazenar a quantidade de caracteres do nome armazenado no índice 0 para comparar com o restantes dos nomes;
  - Criar uma variavel que armazena a palavra com maior quantidade de palavras;
  - Criar um loop para percorrer o array;
  - Criar uma variável dentro do loop para armazenar a quantidade de caracteres do nome corrente;
  - Criar uma condifional para comparar os valores de caracteres entre as variáveis que armazena o nome do índice 0 e do corrente, caso a palavra corrente seja maior armazenar na variavel que armazena a palavra com maior quantidade de caracteres, e mudar o valor da variável que armazena a palavra com maior quantidade de caracteres para a palavra do índice atual;
  -Fazer a função retornar o valor dessa variavel que armazena o nome da palavra com maior quantidade de caracterer;
  - 
*/

const name = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function largerNumberCharacters(arrayNames) {
  let largerNameCharacters = arrayNames[0].length;
  let nameLarger = '';
  for(let index in arrayNames) {
    let currentName = arrayNames[index].length;
    if(currentName > largerNameCharacters) {
      largerNameCharacters = currentName;
      nameLarger = arrayNames[index];
    }
  }
  return nameLarger;
}

console.log(largerNumberCharacters(name))