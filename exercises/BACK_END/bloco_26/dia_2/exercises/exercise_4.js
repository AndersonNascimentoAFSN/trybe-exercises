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

const { readFile, writeFile } = require('fs').promises;
const { questionInt } = require('readline-sync');

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

const formatData = (fileName) => {
  return JSON.parse(fileName).map((person) => {
    return `${person.id} - ${person.name}`;
  });
}

const readFilePrintPerson = (fileName) => {
  return readFile(fileName, 'utf8')
    .then((data) => {
      formatData(data).forEach((person) => console.log(person));
    })
    .catch((err) => {
      return `Não foi possível ler o arquivo: ${err.message}`;
    });
}

// readFilePrintPerson('./simpsons.json');

const readFilePromise = (fileName, id) => {
  return readFile(fileName, 'utf8')
    .then((data) => {
      const [person] = formatData(data).filter((person) => {
        const [personId] = person.split('-');
        return +personId === id;
      });
      if (person) return person;
      throw new Error('id não encontrado.');
    })
    .catch((err) => {
      return `error: ${err.message}`;
    });
}

// readFilePromise('./simpsons.json', 1).then((data) => console.log(data));

const readContentFile = (path) => {
  return readFile(path, 'utf8')
    .then((data) => {
      console.log('Arquivo lido com sucesso!');
      return JSON.parse(data);
    })
    .catch((err) => {
      console.log(`Error: ${err.message}`);
      return null;
    });
}

const writeContentFile = (path, content) => {
  writeFile(path, JSON.stringify(content))
    .then(() => {
      console.log('Arquivo escrito com sucesso!');
    })
    .catch((err) => {
      console.error(`Error: ${err.message}`);
    });
}

// writeFileJson();

const removeCharacters10And6 = async () => {
  const characters = await readContentFile('./simpsons.json');
  const charactersFilter = characters.filter((person) => {
    return +person.id !== 10 && +person.id !== 6;
  });
  console.log('Personagens removidos com sucesso!');
  return charactersFilter;
};

const characters1and4 = async (path, newPath)  => {
  const characters = await readContentFile(path);
  const charactersFiltered = characters.filter((character) => character.id > 0 && character.id <= 4);
  writeContentFile(newPath, charactersFiltered);
};

// characters1and4('./simpsons.json');

const addCharacter = async (path, newCharacter) => {
  const characters = await readContentFile(path);
  
  if(newCharacter.id !== characters[characters.length - 1].id) {
    characters.push(newCharacter);
    writeContentFile(path, characters);
  } else {
    console.log('Error, este id já existe!');
  }
}

// addCharacter('./simpsonFamily.json', { id: '5', name: 'Nelson Muntz'} );

const replaceCharacter = async (path, replacedCharacter, newCharacter) => {
  const characters = await readContentFile(path);

  const replacedArray = characters.map((character) => {
    if(character.name === replacedCharacter) {
      character.name = newCharacter;
    };
    return character;
  });

  writeContentFile(path, replacedArray);

  console.log(`Personagem "${replacedCharacter}" substituído por: "${newCharacter}"`);
};

// console.log(replaceCharacter('./simpsonFamily.json', 'Nelson Muntz', 'Maggie Simpson').then((data) => console.log(data)));

const main = () => {
  let id = 0;
  const option = questionInt(`
Escolha uma das opções abaixo:
  1 - Exibir todos os personagens;
  2 - Exibir um personagem através de seu id;
  3 - Remover os personagens 3 e 6;
  4 - Criar um novo arquivo contendo os personagens de 1 a 4;
  5 - Criar o personagem 'Nelson Muntz';
  6 - Substituir personagens;
  7 - sair;\n
  `);

  if(option == 2) {
    id = questionInt(`Digite o id do personagem: `);
  }

  selectOption(option, id);
}

const selectOption = async (option, id = 0) => {
  switch(option) {
    case 1:
      readFilePrintPerson('./simpsons.json');
      break;
    case 2:
      readFilePromise('./simpsons.json', id).then((data) => console.log(data));
      break;
    case 3:
      const charactersRemoved = await removeCharacters10And6();
      writeContentFile('./simpsons.json', charactersRemoved);
      break;
    case 4:
      characters1and4('./simpsons.json', './simpsonFamily.json');
      break;
    case 5:
      addCharacter('./simpsonFamily.json', { id: '5', name: 'Nelson Muntz'} );
      break;
    case 6: 
    replaceCharacter('./simpsonFamily.json', 'Nelson Muntz', 'Maggie Simpson');
    break;
    case 7:
      return;
    default:
      console.log(`\nOpção inválida`);
      main();
  }
}

main();


// const formatData = (fileName, id) => {
//   return JSON.parse(fileName).filter((data) => +data.id === +id)
//     .reduce((_, curr) => `${curr.id} - ${curr.name}`, 0);
// }

// const readFilePromise = (fileName, id) => {
//   return readFile(fileName, 'utf8')
//     .then((data) => {
//       return formatData(data, id);
//     })
//     .catch((err) => {
//       return `Não foi possível ler o arquivo: ${err.message}`;
//     })
// }

// console.log(readFilePromise('./simpsons.json', 1)
//   .then((data) => console.log(`data: ${data}`))
// );

