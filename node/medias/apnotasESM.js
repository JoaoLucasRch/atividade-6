import { media, menor, maior } from './notasESM.js';

const notasTurma = [7.5, 8.0, 6.2, 9.3, 5.8];

console.log(`Notas da turma: ${notasTurma.join(', ')}`);
console.log(`Média da turma: ${media(notasTurma).toFixed(2)}`);
console.log(`Menor nota: ${menor(notasTurma)}`);
console.log(`Maior nota: ${maior(notasTurma)}`);