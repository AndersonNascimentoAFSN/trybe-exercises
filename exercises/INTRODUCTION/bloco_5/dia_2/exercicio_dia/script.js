// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
const title = document.createElement('h1');
const body = document.getElementsByTagName('body')[0];
const titleText = document.createTextNode('Exercício 5.2 - JavaScript DOM');
body.appendChild(title);
title.appendChild(titleText);
console.log(title, body);

// 2 - Adicione a tag div com a classe main-content como filho da tag body;
const mainContent = document.createElement('div');
mainContent.className = 'main-content';
body.appendChild(mainContent);
console.log(mainContent);

// 3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
const centerContent = document.createElement('div');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

// 4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
const content = document.createElement('p');
const contentText = document.createTextNode('JavaScript é uma das linguagens de programação mais utilizadas no mundo.');
centerContent.appendChild(content);
content.appendChild(contentText);
// content.style.cssText = 'padding: 5px; text-align: center; ';

// 5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
const leftContent = document.createElement('div');
leftContent.classList.add('left-content');
mainContent.appendChild(leftContent);

// 6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
const rightContent = document.createElement('div');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);


// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do div criado no passo 5;
const smallImage = document.createElement('img');
smallImage.setAttribute('src', 'https://picsum.photos/200');
leftContent.appendChild(smallImage);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
const list = document.createElement('ul');

const listNumbers = ['Um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
// const listListItens = [];

for (let index = 0; index < 10; index += 1) {
  let listItem = document.createElement('li');
  let text = listNumbers[index];
  let textListItem = document.createTextNode(text);
  list.appendChild(listItem);
  listItem.appendChild(textListItem);
}

rightContent.appendChild(list);

// 9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

listNodesH3 = [];
for ( let index = 0; index < 3; index += 1) {
  let tagH3 = document.createElement('h3');
  mainContent.appendChild(tagH3)
  listNodesH3.push(tagH3);
}


/////// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// Adicione a classe title na tag h1 criada;
title.classList.add('title');

// Adicione a classe description nas 3 tags h3 criadas;
for (let h3 of listNodesH3) { 
  h3.classList.add('description');
}

// Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild();
let dadLeftContent = leftContent.parentNode;
dadLeftContent.removeChild(leftContent);

// Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div;
rightContent.style.cssText = 'margin: 5px auto;';

// Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
dadCenterContent = centerContent.parentNode;
dadCenterContent.style.cssText = 'background: rgb(240, 240, 240)';

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

let ListItens = rightContent.children[0].children;
let dadlistItens = ListItens[0].parentNode;

for (let index =  0; index < 2; index += 1) { 
  let lastChild = dadlistItens.lastChild;
  dadlistItens.removeChild(lastChild);
  console.log(lastChild);
}
