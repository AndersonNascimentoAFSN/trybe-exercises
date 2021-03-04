/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function changeText(text, element) {
  const textParagraph = document.querySelector(element);
  textParagraph.textContent = text;
}

const text = 'Trabalhando na área de desenvolvimento Web em uma empresa maravilhosa, repleto de pessoas fantásticas, transformando vidas e sendo impactado por isso, além de ser bem remunerado por isso. :)';
changeText(text, '.center-content p:nth-child(2)');
changeText('Como me vejo daqui a 2 anos?', '.center-content p:nth-child(1)');

// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeBackgroundColor(color, element){
  const mainContent = document.querySelector(element);
  mainContent.style.cssText = `background: ${color}; ` ;
}

changeBackgroundColor('rgb(76,164,109)', '.main-content');

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.

changeBackgroundColor('rgb(245,245,245)', '.center-content');

// 4. Crie uma função que corrija o texto da tag <h1>.

function textRectify(element, oldString, newString) {
  const tag = document.querySelector(element);
  const tagText = tag.textContent;
  const newText = tagText.replace(oldString, newString);
  tag.textContent = newText;
}
textRectify('.title', 'JavaEscripito', 'JavaScript');

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function textUpperCase(element) { 
  const paragraph = document.querySelector(element);
  const textParagraph = paragraph.textContent;
  const textParagraphUpperCase = textParagraph.toUpperCase();
  return paragraph.textContent = textParagraphUpperCase;
}

textUpperCase('p');

// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function textParagraphConsole() {
  const paragraph = document.querySelectorAll('p');
  paragraph.forEach((paragraph) => {
    paragraph.style.cssText = 'padding-left: 15px; '
    console.log(paragraph.textContent);
  });
}

textParagraphConsole();