const pizzas = [
  {sabor: 'Frango com Catupiry', pedidos: 99, status: ''},
  {sabor: 'Marguerita', pedidos: 75, status: ''},
  {sabor: 'Gratinada', pedidos: 68, status: ''},
  {sabor: 'Quatro Queijos', pedidos: 80, status: ''},
];

const verificaPizza = (pizza) => {
    if (pizza.pedidos >= 75) {
      return pizza.status = 'TOP';
    } else {
      return pizza.status = 'Não é TOP';
    }
}

pizzas.forEach(verificaPizza);
// console.log(pizzas);

