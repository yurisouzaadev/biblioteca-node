const fs = require('fs');
const tratarErros = require('./erros/funcoesErro');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) =>{
    try{
        if (erro) throw erro;
        contaPalavras(texto);

    } catch(erro) {
        //o que fazer com o erro?
       tratarErros(erro);
    }
    
})

function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    }) 
    console.log(contagem);
}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n');
}

//criar um array com as palavras
// contar as ocorrências
// montar um objeto com o resultado

// exemplo: { 'web': 3, 'computador': 5, 'teste': 1 }

function quebrarEmParagrafos(texto) {
    
    

}

//EX FLAT MAP:const frases = ["Olá mundo", "Tudo bem"];
//const resultadoFlatMap = frases.flatMap(frase => frase.split(" "));
// Saída: ["Olá", "mundo", "Tudo", "bem"]

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}


function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
   // objeto[propriedade] = valor;
   listaPalavras.forEach(palavra => {
    if (palavra.length >=3){
    const palavraLimpa = limpaPalavras(palavra);
    resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  
   })
   return resultado;
}