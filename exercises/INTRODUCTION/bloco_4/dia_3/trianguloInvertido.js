/* Exercício 3 - Programa triângulo feito de asteríscos inverido
    Programa: 
      Triângulo feito de asteríscos invertido;
    Objetivo: 
      O objetivo deste exercício é fazer um triângulo de asteríscos invertido. 
    Algoritmo: 
      Criar a variável number contendo um número, que representará a quantidade de vezes que os astirísticos aparecerão no console;
      Criar a variável asterisk que conterá a string '*'; 
      Criar uma variável space que conterá um espaço ' ';
      Criar a variável spaceNumber que imprimirá os espaços corretos;
      Utilizar um laço de repetição para repetir o número de vezes que o asteríscos e espaços aparecerão no console;
      exibir no console os asteriscos a cada iteração;
    */

   let number = 5;
   let asterisk = '*';
   let space = ' ';
   spaceNumber = 5;
   
   for (let count = 1; count <= number; count += 1) {
    spaceNumber -= 1; 
    // console.log(space.repeat(spaceNumber) + asterisk.repeat(count));    
   }
  
   

     //  Solução gabarito: 
     let size = 5;
     let symbol = '*';
     let inputLine = '';
     let inputPosition = size;
  
  
  for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
    for(let columnIndex = 0; columnIndex <= size; columnIndex += 1){
      if(columnIndex < inputPosition){
        
      }
    }
    inputLine += symbol;
  }