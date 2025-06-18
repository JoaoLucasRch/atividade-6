const fs = require('fs');
const chalk = require('chalk');

const arquivo = 'arquivo.md';

fs.readFile(arquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(chalk.red('Erro ao ler o arquivo:'), err.message);
    return;
  }


  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

 const textoColorido = data.replace(regex, (match, textoLink, url) => {
    return chalk.blue(`[${chalk.bold(textoLink)}]`) + chalk.gray(`(${url})`);
  });

  console.log(textoColorido);
});
