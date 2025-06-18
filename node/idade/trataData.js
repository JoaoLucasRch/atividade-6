function calcIdade(niver) {
  const hoje = new Date();
  const aniver = new Date(niver);

  let idade = hoje.getFullYear() - aniver.getFullYear();
  const mes = hoje.getMonth() - aniver.getMonth();
  const dia = hoje.getDate() - aniver.getDate();

  if (mes < 0 || (mes === 0 && dia < 0)) {
    idade--;
  }

  return idade;
}

module.exports = {
  calcIdade
};