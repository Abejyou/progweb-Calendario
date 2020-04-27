'use strict';

function Roteador(rotas){
    try{
        if(!rotas){
            throw 'Erro: rotas é um parâmetro Obrigatório'
        }
        this.constructor(rotas);
        this.iniciar();
    }
    catch(e){
        console.log(e);
    }
}

Roteador.prototype = {
    rotas: undefined,
    elementoRaiz: undefined,
    constructor: function(rotas){
        this.rotas = rotas;
        this.elementoRaiz = document.querySelector('#app');
    },
    iniciar: function(){
        let rot = this.rotas;
        (function(scope, rot){
            window.addEventListener('hashchange', function(e){
                scope.mudou(this, rot)
            });
        })(this, rot);
        this.mudou(this, rot);
    }, 
    mudou: function(scope, rot){
        if(window.location.hash.length > 0){
            for(let i = 0; i < rot.length; i++){
                let rota = rot[i];
                if(rota.rotaAtiva(window.location.hash.substr(1))){
                    scope.irPara(rota.caminho);
                }
            }
        }
        else {
            for(let i = 0; i < rot.length; i++){
                let rota = rot[i];
                if(rota.rotaPadrao){
                    scope.irPara(rota.caminho);
                }
            }
        }
    },
    irPara: function(caminho){
        (function(scope){
            let url = `views/${caminho}`
            let xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function(){
                if(this.readyState === 4 && this.status === 200)
                    scope.elementoRaiz.innerHtml = this.responseText;
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this)
    }
}