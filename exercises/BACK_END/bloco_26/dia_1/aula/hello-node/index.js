const { questionInt } = require('readline-sync');

// fórmula de bhaskara;

// 1. Ler os valores de a, b e c
const a = questionInt('Digite o valor de a: ');
const b = questionInt('Digite o valor de b: ');
const c = questionInt('Digite o valor de c: ');

console.log(a, b, c);

// 2. Criar uma função para calcular o delta
function calcularDelta(a, b, c) {
  const delta = Math.pow(b, 2) - (4*a*c);
  return delta;
}

console.log(calcularDelta(a, b, c));

// 3. Criar uma função para calcular o valor final

function calculaBhaskara(a, b, delta) {
  const x1 = (b * -1 + Math.sqrt(delta)) / (2 * a); 
  const x2 = (b * -1 - Math.sqrt(delta)) / (2 * a);
  return {
    x1,
    x2
  };
};

const delta = calcularDelta(a, b, c);
const { x1, x2 } = calculaBhaskara(a, b, delta);

console.log(`Delta: ${delta}; Bhaskara: x1=${x1}, x2=${x2}`);
  