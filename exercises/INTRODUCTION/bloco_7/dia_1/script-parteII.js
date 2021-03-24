// 1) Crie uma função que receba um número e retorne seu fatorial.
const number = 4;
const factorial = (number) => {
  if (number === 0) {
    return 1;
  }
  let sum = 1;
  while (number >= 1) {
    sum *= number;
    number -= 1;
  }
  return sum;
}
// console.log(factorial(number));

let sum = 1;
const factorialRecursive = (number) => {
  if (number === 0) {
    return 1;
  }
  factorialRecursive(number - 1);
  sum *= number; 
  return sum;
}
// console.log(factorialRecursive(number));

// 2) Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = (string) => {
  const array = string.split(' ');
  let longest = '';
  for (let index = 0; index < array.length; index += 1) {
      for (let indexColumn = 0; indexColumn < array.length; indexColumn += 1) {
        if (array[index].length > array[indexColumn].length) {
          longest = array[index];
      }
    }
  }
  return longest;
}

// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 3) Crie uma página que contenha: (Disponível na pasta 'page')


// 4) Crie um código JavaScript com a seguinte especificação:

const text = 'Tryber Student x aqui!';
const xSring = (string) => text.replace('x', string);
// console.log(xSring('Anderson'));
const skills = ['Git', 'JavaScript', 'CSS', 'HTML', 'GitHub'];

const tryberSkills = (xString) => {
  const skill = skills.sort().join(', ');
  return `${xString} Minhas cinco principais habilidades são: ${skill} #goTrybe`
}

console.log(tryberSkills(xSring('Anderson')));
