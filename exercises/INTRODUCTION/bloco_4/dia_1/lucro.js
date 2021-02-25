// Programa Lucro

const quantProdutos = 1000;
const valorVendaUnit = 20;
const valorVendaProd = valorVendaUnit * quantProdutos;
const taxaImposto = 0.2;
const valorCustoUnit = 10;
const valorCustoProd = 10 * quantProdutos;

let valorCustoTotal = null;
let valorLucro = null;

valorCustoTotal = valorCustoProd + (valorCustoProd * taxaImposto);

valorLucro = valorVendaProd - valorCustoTotal;

const valorLucroFormat = valorLucro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});

console.log(`O valor do lucro total é: ${valorLucroFormat}`);

