import _ from 'lodash';

const numeros = [8, 3, 5, 2, 3, 10, 5, 6, 7, 2];

const ordenado = _.sortBy(numeros);
const unicos = _.uniq(numeros);
const pares = _.filter(numeros, (n) => n % 2 === 0);
const dobrados = _.map(numeros, (n) => n * 2);
const soma = _.sum(numeros);

console.log("Array original:", numeros);
console.log("Ordenado:", ordenado);
console.log("Sem duplicados:", unicos);
console.log("Apenas pares:", pares);
console.log("Dobro de cada número:", dobrados);
console.log("Soma total:", soma);