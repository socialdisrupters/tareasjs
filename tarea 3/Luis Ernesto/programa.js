const express = require('express');

var contador = 1;

const servidor = express();

servidor.get('/', function(req, res){
res.send('Eres el usuario numero: '+ contador);
contador++;
});

servidor.listen(3000, function(){
    console.log('estoy escuchando en el puerto 3000');
});


