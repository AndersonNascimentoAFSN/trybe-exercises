const li = Array.from(document.querySelectorAll('li'));

// const dataSlideList = li.map((elemento) => elemento.getAttribute('data-slide'));
// const idList = li.map((elemento) => elemento.getAttribute('id'));


// const getElementAttr = (el, key) => {
//   return el.getAttribute(key);
// }
// const dataSlideList = li.map((el) => getElementAttr(el, 'data-slide'));
// const idList = li.map((el) => getElementAttr(el, 'id'));


const getElementAttr = (key) => {
  return function(el) {
    return el.getAttribute(key);
  }
}

const getAttrDataSlice = getElementAttr('data-slide');
// console.log(getAttrDataSlice);

const dataSlideList = li.map(getAttrDataSlice);

console.log(dataSlideList);
// console.log(idList);