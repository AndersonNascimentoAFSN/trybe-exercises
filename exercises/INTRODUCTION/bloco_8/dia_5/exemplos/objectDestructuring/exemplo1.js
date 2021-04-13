const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

// const { name } = product;
// console.log(name);

const { name, seller } = product;
// console.log(name);
// console.log(seller);

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
}

const { a:nome, b:turma, c:materia, } = student;
// console.log(nome, turma, materia);

const printProductDetails = (({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
});

printProductDetails(product);


// Implementação do filter

const test = (number) => {
  return (number % 2 === 0);
}

const filter = (array, test) => {
  const filtered = [];
  for (const iterator of array) {
    if (test(iterator)) {
      filtered.push(iterator);
    }
  }
  return filtered;
};
// console.log(filter([1, 2, 3, 4], test));

// Outra implementação filter:

// const test = (number) => {
//   if (number % 2 === 0) {
//     return number;
//   }
// }

// const filter = (array, test) => {
//   const filtered = [];
//   for (const iterator of array) {
//     const filteredNumber = test(iterator);
//     if(filteredNumber !== undefined) {
//       filtered.push(filteredNumber);
//     }  
//   }
//   return filtered;
// };
// console.log(filter([1, 2, 3, 4], test));
