'use strict';

(function(){
    function iniciar(){
        var router = new Roteador([
            new Rota('home', 'home.html', true)           
        ]);
    }

    iniciar();
})