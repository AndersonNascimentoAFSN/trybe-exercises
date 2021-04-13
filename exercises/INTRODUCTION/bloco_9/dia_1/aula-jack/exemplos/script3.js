const funcao1 = (callback) => {
  setTimeout(() => {
    console.log('1 - Coletando os dados do cliente');
    callback();
  }, 3000);
};

const funcao2 = () => {
  setTimeout(() => {
    console.log('2 - Enviando o email');
    console.log('Envio de email finalizado');
  }, 3000);
};

console.log('Iniciando o envio de email');

funcao1(funcao2);
