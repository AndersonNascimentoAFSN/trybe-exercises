/* 
  2) Escreva um código para consumir a função construída no exercício anterior.

    -Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
    -Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
    -Utilize then e catch para manipular a Promise retornada pela função:
      -Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
      -Caso a Promise seja resolvida, escreva na tela o resultado do cálculo. 
*/

const promise = require('./exercise_1');

const randomNumberArray = (qty) => {
  const array = [];
  for(i = 1; i <= qty; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    array.push(randomNumber);
  }
  return array;
}

const consumePromise = () => {
  const [a, b, c] = randomNumberArray(3);
  promise(a, b, c)
    .then((result) => { console.log(result) })
    .catch((err) => { console.error(err.message) });
}

consumePromise();
