const fs = require('fs').promises;

const readContentFile = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf8');
    if (content === "") return [];
    return JSON.parse(content);
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const writeContentFile = async (path, content) => {
  try {
    const arrContent = await readContentFile(path);

    arrContent.push(content);
    await fs.writeFile(path, JSON.stringify(arrContent));

    return content;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

module.exports = {
  readContentFile,
  writeContentFile
};
