const pizzas = [
  {sabor: 'Frango com Catupiry', pedidos: 99, status: ''},
  {sabor: 'Marguerita', pedidos: 75, status: ''},
  {sabor: 'Gratinada', pedidos: 68, status: ''},
  {sabor: 'Quatro Queijos', pedidos: 80, status: ''},
];

//  Some - Pelo menos um elemento deve ser verdadeiro
const isFourCheeses = pizzas.some((pizza) => pizza.sabor === 'Quatro Queijos');
// console.log(isFourCheeses);

// Every - Todos os elementos devem ser verdadeiros

const allRequestsLessThan100 = pizzas.every((pizza) => pizza.pedidos < 100);
// console.log(allRequestsLessThan100);

// Find - Procura o primeiro elemento que passe no critério informado.

const allRequests60and80 = pizzas.find((pizza) => pizza.pedidos >= 60 && pizza.pedidos <= 80);
console.log(allRequests60and80);