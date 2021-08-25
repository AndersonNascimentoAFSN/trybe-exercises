const { questionInt, question } = require('readline-sync');

const guessingResult = (response, randomNumber) => {
  if(response !== randomNumber ) {
    return `Opa, não foi dessa vez! O número era ${randomNumber}.`
  }
  return "Parabéns, você está com sorte!";
}

const runGame = () => {
  const randomNumber = Math.round((Math.random() * 10));
  const response = questionInt("Digite um número para verificarmos sua sorte: ");
  console.log(guessingResult(response, randomNumber));

  const playAgain = question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  if (playAgain !== 's') return console.log("OK, até a proxima!");

  runGame();
}


runGame();