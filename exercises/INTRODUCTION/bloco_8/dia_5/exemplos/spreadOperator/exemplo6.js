// Faça uma lista com as suas frutas favoritas 
const specialFruit = ['Maçã','Laranja','Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Uva','Limão','Goiaba'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit, ...additional];
  // return fruit.concat(additional);
}

console.log(fruitSalad(specialFruit, additionalItens));
console.log(specialFruit, additionalItens);
