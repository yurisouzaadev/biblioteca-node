const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) =>{
    quebrarEmParagrafos(texto);
    //verificaPalavrasDuplicadas(texto);
})

//criar um array com as palavras
// contar as ocorrências
// montar um objeto com o resultado

// exemplo: { 'web': 3, 'computador': 5, 'teste': 1 }

function quebrarEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.map((paragrafo) => {
        return verificaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);

}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
   // objeto[propriedade] = valor;
   listaPalavras.forEach(palavra => {
    resultado[palavra] = (resultado[palavra] || 0) + 1;
   })
   return resultado;
}