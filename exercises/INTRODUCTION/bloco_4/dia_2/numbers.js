let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// Exercício 1 - Usando forEach:
numbers.forEach((number) => {
  // console.log(number);
});

// Exercício 1 - Usando for: 
for(let index = 0; index < numbers.length; index += 1){
  // console.log(numbers[index]);
}

// Exercício 1 - Usando for in: 
for(let index in numbers){
  // console.log(numbers[index]);
} 
/* Note: for...in não deve ser usado para iteração em uma Array onde a ordem é importante, visto que ele iterage em uma ordem arbitrária. */


// Exercício 1 - Usando while:
let index = 0;
while(index < numbers.length){
  // console.log(numbers[index]);
  index += 1;
}

// Exercício 1 - Usando do while:
index = 0;
do{
  // console.log(numbers[index]);
  index += 1;
}
while(index < numbers.length);


