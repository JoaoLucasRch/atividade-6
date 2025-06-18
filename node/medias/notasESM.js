export function media(vetor) {
  if (!vetor.length) return 0;
  const total = vetor.reduce((soma, nota) => soma + nota, 0);
  return total / vetor.length;
}

export function menor(vetor) {
  return Math.min(...vetor);
}

export function maior(vetor) {
  return Math.max(...vetor);
}