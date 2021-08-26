const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./arquivo.txt', 'Anderson Nascimento', { flag: 'wx' });
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo:\n error: ${err.message}`);
  }
}

main();
