const express = require('express');
const servidor = express ();

let num = 1;

servidor.get('/', function(req, res){
    res.send('Eres el visitante: ' + num++);
});

servidor.listen(3000,function(){
    console.log('Estoy escuchando en el puerto 3000');
});