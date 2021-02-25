//Programa triângulo válido
const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;
const somaAngulo = angulo1 + angulo2 + angulo3;
const trianguloValido = (somaAngulo === 180) ? true : 'Definitivamente não é um triângulo.';

console.log(`Resultado: ${trianguloValido}`);
