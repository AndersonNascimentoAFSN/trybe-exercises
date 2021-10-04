/* 
  Crie uma função que recebe três parâmetros retorna uma Promise.
    -Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
    -Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
    -Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
    -Caso o resultado seja maior que 50, resolva a Promise com o valor obtido. 
*/


// const { question } = require('readline-sync');

// const a = question('Digite o primeiro valor: ');
// const b = question('Digite o segundo valor: ');
// const c = question('Digite o terceiro valor: ');

const number = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    // if(isNaN(typeof+(a + b + c))) reject(new Error(`\nInforme apenas números.`));
    if(typeof(a + b + c) !== 'number') reject(new Error(`\nInforme apenas números.`));

    const result = (a + b) * c;

    if(result < 50 ) reject(new Error(`\nValor muito baixo.`));

    resolve(result);
  });
  return promise;
};

// number(5, 4, 10)
// .then((result) => {
//   console.log(result);
// })
// .catch((err) => {
//   console.log(err.message);
// });

module.exports = number;
