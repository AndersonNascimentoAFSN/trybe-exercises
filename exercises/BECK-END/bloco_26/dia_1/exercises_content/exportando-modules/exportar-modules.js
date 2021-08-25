// Para exportar algo no sistema CommonJS, utilizamos a variável global module.exports , atribuindo a ela o valor que desejamos exportar:

const brl = 5.37;
// module.exports = brl;

const usdToBrl = (valueInUsd) => valueInUsd * brl;
// module.exports = usdToBrl;

// Suponhamos agora que seja desejável exportar tanto a função de conversão quanto o valor do dólar (a variável brl ). Para isso, podemos exportar um objeto contendo as duas constantes da seguinte forma:

module.exports = {
  brl,
  usdToBrl,
}
