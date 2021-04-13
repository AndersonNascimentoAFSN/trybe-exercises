const assert = require('assert');

const horrorBooks = ['It', 'The Shiring'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

let awesomeBooks = [];

// Usando for
for (let index = 0; index < horrorBooks.length; index += 1) {
  const element = horrorBooks[index];
  awesomeBooks.push(element);
}
for (let index = 0; index < scifiBooks.length; index += 1) {
  const element = scifiBooks[index];
  awesomeBooks.push(element);
}

// Utilizando o spread operator;

const books = [...horrorBooks, ...scifiBooks];
// console.log(books, awesomeBooks);

const result = [ 'It',
'The Shiring',
'I, Robot',
'Caves of Steel',
'The End of Eternity' ];

assert.deepStrictEqual(books, result);
assert.deepStrictEqual(awesomeBooks, result);