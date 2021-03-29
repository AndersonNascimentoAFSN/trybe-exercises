
// Função de primeira ordem:
const product = (productName, price, isOnSale) => ({
  productName,
  price: `R$ ${price}`,
  sale: isOnSale ? 'For Sale' : 'Not for sale',
});

// console.log(product('Computador', 3000, false));

// Função de alta ordem:

const button = document.querySelector('#signup-button');

// minha função de primeira classe:
const registerUser = () => {
  // código para registrar a nova pessoa usuária:
  console.log('Registrado com sucesso!');
}

// minha função de segunda classe:
button.addEventListener('click', registerUser);

