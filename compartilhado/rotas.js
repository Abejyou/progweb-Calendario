'use strict'

function Rota(nome, caminho, rotaPadrao){
    try{
        if(!nome || !caminho){
            throw `Erro: É necessário informar o Nome e o Caminho da Página`
        }
        this.constructor(nome, caminho, rotaPadrao);
    }
    catch(e){
        console.log(e);
    }
}

Rota.prototype = {
    nome: undefined,
    caminho: undefined,
    rotaPadrao: undefined,
    constructor: function(nome, caminho, rotaPadrao){
        this.nome = nome;
        this.caminho = caminho;
        this.rotaPadrao = rotaPadrao;
    },
    ehRotaAtiva: function(caminhoHash){
        return caminhoHash.replace('#', '') === this.name;
    }
}