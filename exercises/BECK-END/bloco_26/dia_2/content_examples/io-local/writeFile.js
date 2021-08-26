const fs = require('fs').promises;

fs.writeFile('./arquivo.txt', 'Anderson Nascimento')
  .then(
    (() => {
      console.log('Arquivo escrito com sucesso!');
    }),
    ((err) => {
      console.error(`Erro ao escrever o arquivo:\n Error: ${err.message}`);
    })
);
