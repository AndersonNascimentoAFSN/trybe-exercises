const fs = require('fs');

const nomeDoArquivo = './arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if(err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Error: ${err.message}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: \n\n${data}`);
});
