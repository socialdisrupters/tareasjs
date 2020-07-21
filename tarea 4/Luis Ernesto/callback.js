const express = require('express');
const servidor = express();
const fs = require ("fs");
const campouno="uno.txt";
const campodos="dos.txt";



servidor.get('/uno', function(req, res){
    fs.readFile(campouno, function(err, data){
        if(err){
            res.send('Error');
        }
        else{
            res.send(data.toString("utf-8"));
        }
    });
});

servidor.get('/dos', function(req, res){
    fs.readFile(campodos, function(err, data){
        if(err){
            res.send('Error');
        }
        else{
            res.send(data.toString("utf-8"));
        }
    });
    });

servidor.listen(3000, function(){
    console.log('estoy escuchando en el puerto 3000');
});
