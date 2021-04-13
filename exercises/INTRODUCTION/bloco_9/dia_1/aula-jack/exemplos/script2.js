const funcao1 = () => {
  setTimeout(() => {
    console.log('1 - Big Mac');
  }, 3000);
};

const funcao2 = () => {
  setTimeout(() => {
    console.log('2 - Big Mac');
  }, 3000);
};

console.log('LANCHES');

funcao1();
funcao2();

console.log('FIM');