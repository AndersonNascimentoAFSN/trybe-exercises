// Lendo arquivos com métodos síncronos

const fs = require('fs');

const nomeDoArquivo = './arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch(err) {
  console.log(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err.message);
}

console.log("Isso somente será executado após a leitura do arquivo de texto. Isso acontece porque a função readFileSync é uma função síncrona e não assíncrona.");
