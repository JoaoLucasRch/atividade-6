const { calcIdade } = require('./trataData');
const inputDate = '2000-06-18'; //exemplo
const idade = calcIdade(inputDate);

console.log(`A idade calculada para a data ${inputDate} é: ${idade} anos.`);