const greeting = (user) => console.log(`Welcome ${user}!`);
// greeting();

const greeting2 = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}`);
}
// greeting2();

const greeting3 = (user = 'usuário') => console.log(`Welcome ${user}!`);
// greeting3();

const multiply = (number = 1, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

// console.log(multiply(8, 2));
