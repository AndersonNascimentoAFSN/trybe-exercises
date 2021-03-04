// Acesse o elemento elementoOndeVoceEsta .
let whereAreYou = document.querySelector('#elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
whereAreYou.parentNode.style.cssText = 'color: blue; ';
console.log(whereAreYou.parentNode);

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
whereAreYou.firstElementChild.textContent = 'Primeiro filho do filho';
console.log(whereAreYou.firstElementChild);

// Acesse o primeiroFilho a partir de pai.
let father = document.getElementById('pai');
father.firstElementChild;
console.log(father.firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
whereAreYou.previousElementSibling;
console.log(whereAreYou.previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
whereAreYou.nextSibling
console.log(whereAreYou.nextSibling);
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
whereAreYou.nextElementSibling
console.log(whereAreYou.nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai .
console.log(father.children[2]);








