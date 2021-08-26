function calcularDivisao(num1, num2) {
  if(num2 === 0) throw Error('Não pode ser feito uma divisão por zero.');

  const resultado = num1 / num2;

  return resultado;
}

try {
  const resultado = calcularDivisao(2, 0);
  console.log(resultado);
} catch(e) {
  console.error(e.message);
}
