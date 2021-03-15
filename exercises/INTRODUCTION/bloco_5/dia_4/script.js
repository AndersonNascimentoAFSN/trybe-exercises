
function changePageColor() {

}


let headerPage = document.querySelector('#cabecalho');
let selectChangerColorHeader = document.querySelector('#changeColorBG');

window.onload = function() {

  if (typeof(Storage) !== 'undefined') {
    color = localStorage.getItem('color');
    headerPage.style.cssText = `background: ${color}; `;
  }
  
  function changeColorPage(event) {
    let getColor = selectChangerColorHeader.value;
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('color', getColor);
      color = localStorage.getItem('color');
    }  
    headerPage.style.cssText = `background: ${color}; `;
  }

  selectChangerColorHeader.addEventListener('change', changeColorPage);

}


// let color = selectChangerColorHeader.value;
// localStorage.setItem('color', color);
// console.log(localStorage.getItem('color'));