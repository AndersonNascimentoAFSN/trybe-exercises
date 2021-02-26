

// // Exercício 5 - Usando o for
let maiorValor = 0;
for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] > maiorValor){
    maiorValor = numbers[index];
  };
}
// console.log(maiorValor);

// // Exercício 5 - Usando o forEach
maiorValor = 0;
numbers.forEach((number) => {
  if(number > maiorValor){
    maiorValor = number;
  }
})
// console.log(maiorValor);

// Exercício 5 - Usando reduce 
maiorValor = numbers.reduce((acumulador, atual) => {
    return Math.max(acumulador, atual);
});
// console.log(maiorValor);

// Exercício 6 - Usando forEach
let count = null;
numbers.forEach((number) => {
  if(number % 2 !== 0){
    count += 1;
  }  
});
if(count === 0){
  // console.log('Nenhum valor ímpar encontrado');
} else {
  // console.log(count);
}

// Exercício 6 - Usando filter 
numerosImpares = numbers.filter((number) => {
  return number % 2 !== 0;  
})
// console.log(numerosImpares);


// Exercício 7 - Usando for 
let menor = numbers[0];
for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] < menor){
    menor = numbers[index];
  }
}
// console.log(menor);

// Exercício 7 - Usando forEach
menor = numbers[0];
numbers.forEach((number) => {
  if(number < menor){
    menor = number;
  }
})
// console.log(menor)

// Exercício 8 - Usando for
let numeros = [];
for(let index = 1; index <= 25; index += 1){
  numeros.push(index);
}
// console.log(numeros.join(', '));


///// Exercício 9 
// Exercício 9 - Usando map
let multiplos = numbers.map((number) => {
  return number * 2;
})
// console.log(multiplos.join(', '));

// Exercício 9 - Usando for
multiplos = [];
for(let index = 0; index < numbers.length; index += 1){
  multiplos.push(numbers[index] * 2)
}
  // console.log(multiplos.join(', '));

////// Exercícios Bônus

// Exercício 1 - Bônus

/* Obs.: Esta é a solução mais econômica  */
for(let i = numbers.length - 1; i > 0; i -= 1){
  for(let j = 0; j < i; j += 1){
    if(numbers[j] > numbers[j + 1]){
      let position = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = position;
    }
  }
}
// console.log(numbers);

// Exercício 2 - Bônus

for(let i = numbers.length -1; i > 0; i -= 1){
  for(let j = 0; j < i; j += 1){
    if(numbers[j] < numbers[j + 1]){
      let position = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = position;
    }
  }
}
// console.log(numbers);


// Exercício 3 - Bônus - Usando for
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for(let i = 0; i < numbers.length; i += 1){
  let multiplo = 0;
  if(numbers.length -1 === i){
    multiplo = numbers[i] * 2
    newNumbers.push(multiplo);
  } else {
    multiplo = numbers[i] * numbers[i + 1]
    newNumbers.push(multiplo);
  }
}

// console.log(newNumbers);











