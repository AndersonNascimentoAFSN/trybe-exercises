////// Conteúdos 

///// Parte I - Buscando elementos

// Acesse o elemento elementoOndeVoceEsta .
const whereAreYou = document.querySelector('#elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
whereAreYou.parentNode.style.cssText = 'color: blue; ';
// console.log(whereAreYou.parentNode);

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
whereAreYou.firstElementChild.textContent = 'Primeiro filho do filho';
// console.log(whereAreYou.firstElementChild);

// Acesse o primeiroFilho a partir de pai.
const father = document.getElementById('pai');
father.firstElementChild;
// console.log(father.firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
whereAreYou.previousElementSibling;
// console.log(whereAreYou.previousElementSibling);primeiroFilhoDoFilho

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
whereAreYou.nextSibling
// console.log(whereAreYou.nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
whereAreYou.nextElementSibling
// console.log(whereAreYou.nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai .
// console.log(father.children[2]);


//// Parte II - Criando elementos

// Crie um irmão para elementoOndeVoceEsta.
const brotherWhereAreYou = document.createElement('div');
const textBrotherWhereAreYou = document.createTextNode = 'Brother Where Are You';
father.append(brotherWhereAreYou);
brotherWhereAreYou.append(textBrotherWhereAreYou);
// console.log(textBrotherWhereAreYou);


// Crie um filho para elementoOndeVoceEsta.
const sonWhereAreYouList = document.createElement('ul');
const sonWhereAreYouListItem = document.createElement('li');
const textSonWhereAreYou = document.createTextNode = 'Texto li lista'
whereAreYou.append(sonWhereAreYouList);
sonWhereAreYouList.append(sonWhereAreYouListItem);
sonWhereAreYouListItem.append(textSonWhereAreYou);


// Crie um filho para primeiroFilhoDoFilho.
const firstSonOfSon = document.querySelector('#primeiroFilhoDoFilho');
const sonFirstSonOfSon = document.createElement('div');
firstSonOfSon.append(sonFirstSonOfSon);
sonFirstSonOfSon.classList = 'sonFirstSonOfSon'

// A partir desse filho criado, acesse terceiroFilho.
sonFirstSonOfSonDiv = document.querySelector('.sonFirstSonOfSon')
// console.log(sonFirstSonOfSonDiv);
// console.log(sonFirstSonOfSonDiv.parentNode.parentNode.parentNode.children[2]);


///// Parte III - Removendo elementos

// Remova todos os elementos da página, menos pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.

const divs = document.querySelectorAll('div');

for (let element of divs) {
  let dadElement = element.parentNode;
  // console.log(dadElement, element.id);
  if (element.id !== 'paiDoPai' && element.id !== 'pai' && element.id !== 'elementoOndeVoceEsta' && element.id !== 'primeiroFilhoDoFilho') {
    let divsExtraidas = dadElement.removeChild(element);
    // console.log(divsExtraidas);
  }
}

