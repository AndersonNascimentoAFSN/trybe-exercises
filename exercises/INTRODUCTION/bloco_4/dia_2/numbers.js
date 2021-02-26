let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// // Exercício 1 - Usando forEach:
numbers.forEach((number) => {
  // console.log(number);
});

// // Exercício 1 - Usando for: 
for(let index = 0; index < numbers.length; index += 1){
  // console.log(numbers[index]);
}

// // Exercício 1 - Usando for in: 
for(let index in numbers){
  // console.log(numbers[index]);
} 
/* Note: for...in não deve ser usado para iteração em uma Array onde a ordem é importante, visto que ele iterage em uma ordem arbitrária. */


// // Exercício 1 - Usando while:
let index = 0;
while(index < numbers.length){
  // console.log(numbers[index]);
  index += 1;
}

// // Exercício 1 - Usando do while:
index = 0;
do{
  // console.log(numbers[index]);
  index += 1;
}
while(index < numbers.length);


// /////// Exercício 2 

// // Exercício 2 - Usando forEach:
let soma = null;
numbers.forEach((item) => {
  soma += item;
})
// console.log(soma);

// // Exercício 2 - Usando for: 
soma = 0;
for(let index = 0; index < numbers.length; index += 1){
  soma += numbers[index];
}
// console.log(soma);

// // Exercício 2 - Usando reduce 
soma = 0;
soma = numbers.reduce((acamulador, valorAtual) => {
  // console.log(acamulador, valorAtual);
  return acamulador + valorAtual;
})
// console.log(soma);

// // Exercício 3 - Usando forEach:
soma = 0;
let media = null;
const quantElementos = numbers.length;

numbers.forEach((number) => {
  return soma += number;;
})
media = soma / quantElementos;
// console.log(media.toFixed(2));

// // Exercício 3 - Usando reduce 
media = 0;
media = numbers.reduce((acumulador, atual) => {
  return acumulador + atual;
});
media = media / quantElementos;
// console.log(media);

// // Exercício 4 

// // Exercício 4 - Usando o forEach

numbers.forEach((number) => {
  if(number > 20) {
    // console.log('Valor maior que 20');
  } else {
    // console.log('Valor menor ou igual a 20');
  }
});

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











