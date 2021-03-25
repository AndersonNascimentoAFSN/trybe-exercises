// Parte I - Adicionando novas chaves (keys)

// Crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.
const customer = {
  firstName: 'Roberto',
  age: 22, 
  job: 'Teacher',
};

const objectCreate = (object, key, value) => {
  object[key] = value;
  return object;
};

objectCreate(customer, 'lastName', 'Ferreira');

console.log(customer);
