const { questionInt } = require('readline-sync')

const runScript = () => { 
  const response = questionInt(
    `Escolha um dos scripts abaixo, digitando o respectivo número:
    1 - imc;
    2 - guessing;
    3 - averageSpeed.
    `);

  switch(response) {
    case 1:
      require('./imc');
      break;
    case 2:
      require('./guessing');
      break;
    case 3:
      require('./averageSpeed');
      break;
    default:
      console.log("Opção inválida");
  }
};

runScript();
