// Programa peças de xadrez
let nomePeca = 'rainha';



switch(nomePeca.toLowerCase()){
  case 'peão':
    console.log('Beth: O peão anda somente uma casa para frente e captura uma casa na diagonal.');
    break;
  case 'cavalo': 
    console.log('Beth: O cavalo movimenta-se em "L". Cuidado com a cabeça, ele pode pular outras peças!');
    break;
  case 'rainha':
    console.log('Beth: A rainha pode tudo! A rainha movimenta-se orizontalmente, verticalmente, e na diagonal, podendo avançar várias casas');
    break;
  case 'rei': 
    console.log('Beth: O rei, comparado com a rainha, é bem sedentário. Movimenta-se orizontalmente, verticalmente e na diagonal, mas apenas uma casa por vez.');
    break;
  case 'torre':
    console.log('Beth: A torre move-se horizontalmente e verticalmente várias casas, se estiverem vazias é claro.');
    break;
  case 'bispo':
    console.log('Beth: O bispo, move-se verticalmente quantas casas quiser.');
    break;
  default:
    console.log('Beth: "Meu filho, esta peça não existe. Por favor, insira o nome de uma peça existênte!"')
}