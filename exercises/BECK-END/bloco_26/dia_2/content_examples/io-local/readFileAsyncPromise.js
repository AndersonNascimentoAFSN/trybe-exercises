const fs = require('fs').promises;

const nomeDoArquivo = './arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8')
  .then(
    ((data) => {
      console.log(`Conteúdo do arquivo:\n${data}`);
    }),
    ((err) => {
      console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Error: ${err.message}`);
      process.exit(1);
    })
);
