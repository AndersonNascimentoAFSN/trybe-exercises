// Agora estamos exportando uma função de forma que podemos utilizá-la para converter um valor em dólares para outro valor, em reais.
// O uso desse nosso módulo se daria da seguinte forma:

const convert = require('./exportar-modules');

const usd = 10;
const brl = convert(usd);

console.log(brl);


// Dessa forma, ao importarmos o módulo, receberemos um objeto como resposta:

const brlValue = require('./exportar-modules');
console.log(brlValue);

console.log(`Valor do dólar: ${brlValue.brl}`);
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`);

// Por último, como estamos lidando com um objeto, podemos utilizar object destructuring para transformar as propriedades do objeto importado em constantes no escopo global:

const { brl, usdToBrl } = require('./exportar-modules');
console.log(`Valor do dólar: ${brl}`);
console.log(`10 dólares em reais: ${usdToBrl(10)}`);
