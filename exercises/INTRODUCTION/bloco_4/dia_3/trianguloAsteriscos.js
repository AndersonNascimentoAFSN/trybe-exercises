/* Exercício 2- Programa triângulo feito de asteríscos 
    Programa: 
      Triângulo feito de asteríscos;
    Objetivo: 
      O objetivo deste exercício é fazer um triângulo quadrado de asteríscos. A quantidade de asteríscos depende do número informado na variável number
    Algoritmo: 
      Criar a variável number contendo um número, que representará a quantidade de vezes que os astirísticos aparecerão no console;
      Criar a variável asterisk que conterá a string '*'; 
      Criar a váriavel space que conterá a string ' ' com um espaço em branco;
      Utilizar um laço de repetição para repetir o número de vezes armazenado na variável number;
      A variável do laço deverá ser em ordem crescente, utilizar esses números decrescente para repetir a variável asterisk;
      exibir no console os asteriscos a cada iteração;
    */


   //Minha solução: 
   let number = 5;
   let asterisk = '*';
   
   
   for (let count = 1; count <= number; count += 1) {
     console.log(asterisk.repeat(count));
   }
   
  //  Solução gabarito: 
   let size = 5;
   let symbol = '*';
   let inputLine = '';


for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  // console.log(inputLine);
  inputLine += symbol;
}
