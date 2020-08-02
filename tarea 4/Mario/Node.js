const express =require('express');
const servidor = express();

servidor.get('/', function(req,res){
    res.send('Tarea 4');
});

servidor.get('/uno', function(req,res){
    res.sendFile('/home/antonio/sesion4/uno.txt');
});

servidor.get('/dos', function(req,res){
    res.sendFile('/home/antonio/sesion4/dos.txt');
});

servidor.listen(3000, function(){
    console.log('Estoy escuchado en el puerto 3000');
});