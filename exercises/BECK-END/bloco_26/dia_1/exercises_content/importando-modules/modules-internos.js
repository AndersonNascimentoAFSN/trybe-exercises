// Módulos internos
// Para utilizarmos um módulo interno, devemos passar o nome do pacote como parâmetro para a função require . Por exemplo, require('fs') importa o pacote fs , responsável pelo sistema de arquivos.
// Uma vez que importamos um pacote, podemos utilizá-lo no nosso código como uma variável, dessa forma:

const fs = require('fs');
const data = fs.readFileSync('./meuArquivo.txt', { encoding: 'utf8', flag:'r' });

console.log(data);