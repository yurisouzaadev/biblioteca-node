function tratarErros(erro) {
    if(erro.code === 'ENOENT'){
   return 'Arquivo não encontrado';       
    } else{
        return 'Erro na aplicação';
    }
}

module.exports = tratarErros;