const sleep = (sleepDuration) => {
  const now = new Date().getTime();
  while(new Date().getTime() < now + sleepDuration);
};

const funcao1 = () => {
  sleep(3000);
  console.log('1 - Big Mac');
};

const funcao2 = () => {
  sleep(3000);
  console.log('2 - Big Mac');
};

console.log('LANCHES');

funcao1();
funcao2();

console.log('FIM');