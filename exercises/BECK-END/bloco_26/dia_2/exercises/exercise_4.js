/* 
  4) Realize o download deste arquivo e salve-o como simpsons.json. Utilize o arquivo baixado para realizar os requisitos abaixo.
  -Você pode utilizar then e catch, async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
  -Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
  -Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
  -Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
  -Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
  -Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
  -Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
*/


// const { readFile } = require('fs');
// const readFilePromise = (filename) => {
//   return new Promise((resolve, reject) => {
//     readFile(filename, (err, content) => {
//       if(err) return reject(err.message);
//       resolve(content);
//     });
//   });
// }

const { readFile } = require('fs').promises;

const mockData = [
  {
  "id": "1",
  "name": "Homer Simpson"
  },
  {
  "id": "2",
  "name": "Marge Simpson"
  },
];

const formatData = (fileName, id) => {
  console.log(fileName);
  return fileName.filter((data) => +data.id === +id)
    .reduce((_, curr) => `${curr.id} - ${curr.name}`, 0);
}

// console.log(format(2));

const readFilePromise = (fileName, id) => {
  return readFile(fileName, 'utf8')
    .then((data) => {
      // console.log(data);
      const format = formatData(data, id);
      return format;
    })
    .catch((err) => {
      return `Não foi possível ler o arquivo: ${err.message}`;
    })
}

console.log(readFilePromise('./simpsons.json', 1).then((data) => console.log(data)));

