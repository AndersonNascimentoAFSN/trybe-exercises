const removeDrink = (array, remove) => {
  array.splice(array.indexOf(`${remove}`), 1);
  return array;
}

// const drinks = ['coca-cola', 'sukita', 'agua', 'garapa', 'suco de laranja'];
// console.log(removeDrink(drinks, 'garapa'));

module.exports = removeDrink;
