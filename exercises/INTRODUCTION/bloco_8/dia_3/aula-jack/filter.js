const cities = [
  { state: 'AM', name: 'Manaus', region: 'N' },
  { state: 'PA', name: 'Belém', region: 'N' },
  { state: 'TO', name: 'Porto Nacional', region: 'N' },
  { state: 'MG', name: 'Nepomuceno', region: 'SE' },
  { state: 'BA', name: 'Cachoeira', region: 'NE' },
  { state: 'PR', name: 'Curitiba', region: 'S' },
  { state: 'SP', name: 'Hotolândia', region: 'SE' },
  { state: 'RN', name: 'Touros', region: 'NE' },
  { state: 'CE', name: 'Jericoacoara', region: 'NE' },
  { state: 'TO', name: 'Três Pedras', region: 'N' },
  { state: 'MG', name: 'João Pinheiro', region: 'SE' },
]

// 1 - Encontre todas as cidades da região Nordeste (NE)
console.log('As cidades que ficam na região Nordeste são: ');
console.log('----------------------------------------------');
const citiesNE = cities.filter((city) => city.region === 'NE');

// console.table(citiesNE);

// 2 - Encontre todas as cidades do Estado de Tocantins (TO)
console.log('As cidades do Estado de Tocantins são: ');
console.log('---------------------------------------');
const citiesTO = cities.filter((city) => city.state === 'TO');

// console.table(citiesTO);

// 3 - Encontre todas as cidades que comecem com a letra C
console.log('As cidades que começam com a letra C são: ');
console.log('-------------------------------------------');

const citiesStartLetterC = cities.filter((city) => {
  // return city.name[0] === 'C';
  const cityC = city.name;
  return cityC.toLowerCase().startsWith('c');
})

console.table(citiesStartLetterC);

