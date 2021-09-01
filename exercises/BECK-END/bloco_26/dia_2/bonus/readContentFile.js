const fs = require('fs').promises;
const { question } = require('readline-sync');

const readContentFile = async (path) => {
  try {
    const contentFile = await fs.readFile(path, 'utf8');
    if(path.split('.').includes('json')) {
      console.log(JSON.parse(contentFile));
    } else {
      console.log(contentFile);
    };
    return contentFile;
  } catch (e) {
    console.log(`\nO arquivo ${path} não existe. \nDescrição detalhada do erro:\n${e.message}`);
    return e;
  }
};

const main = async () => {
  const response = question('Digite nome e a localização do arquivo que deseja ler: ');
  readContentFile(response);
}

main();
