/* Exercício 1 (Bônus) - O objetivo deste programa é retornar o número que a string com o um algarismo romano representa*/ 

/* 
Algoritmo:
  - Adicionar uma variável contendo um número;
  - Criar um laço de repetição que repetirá até o valor armazenado na variável acima;
  - criar uma variável que armazenará a soma dos index das repetições do loop acima;
  - Fazer a função retornar o valor desta variável;
  - 
*/

let stringRoman = 'XV';

function romanNumbers(string){
  let romanNumber = '';

}

romanNumbers = {
  'I': 1,
  'IV': 4,
  'V': 5,
  'IX': 9,
  'X': 10,
  'XL': 40,
  'L': 50,
  'XC': 90,
  'C': 100,
  'CD': 400,
  'D': 500,
  'CM': 900,
  'M': 1000,
}

let sum = 0

for(let index = 0; index < stringRoman.length; index += 1){  

  if(stringRoman[index] === 'I' && stringRoman[index + 1] !== 'I'){
    if(stringRoman[index + 1 ] === 'V'){
      sum += 4;
      console.log(`Somando + 4 - index: ${index}`);
    } else if(stringRoman[index + 1 ] === 'X'){
      sum += 9;
    }

  } else  if(stringRoman[index] === 'I' && stringRoman[index + 1] === 'I' || stringRoman[index] === 'I' && stringRoman[index - 1]  !== 'I') {
    sum += 1;
    console.log(`Somando + 1 - index: ${index}`)

  }else if(stringRoman[index] === 'V' && stringRoman[index - 1] !== 'I'){
    sum += 5;
    console.log(`Somando + 5 - index ${index}`);

  } else if(stringRoman[index] === 'X' && stringRoman[index + 1] !== 'I'){
    if(stringRoman[index + 1] === 'V'){
      sum += 10;
      console.log(`Somando + 10 - index ${index}`);
    } else if(stringRoman[index + 1] === 'L'){
      sum += 40;
      console.log(`Somando + 40 - index ${index}`);
    } else if(stringRoman[index + 1] === 'C'){
      sum += 90;
      console.log(`Somando + 90 - index ${index}`);
    } 
  } else if(stringRoman[index] === 'X' && stringRoman[index - 1] !== 'I') {
    sum += 10;
    console.log(`Somando + 10 - index ${index}`);
  }

  if (stringRoman[index] === 'I' && index === stringRoman.length - 1){
    sum += 1;
    console.log(`Teste: Somando + 1 - index: ${index}`);
  }

  if(stringRoman[index] === 'X' && index === stringRoman.length -1){
    sum += 10;
    console.log(`Somando + 10 - index ${index}`);
  }
  
}
console.log(sum);

// console.log(stringRoman.length)
