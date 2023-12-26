//const express = require('express') commonJS
//ecmascript modules:
import express from 'express'
//crear la app...
const app = express()

app.get('/', function(req, res) {
    res.send('Hola mundounuouuouou!!')
});

app.get('/nosotros', function(req, res) {
    res.send('informacion de nosotros')
});

//definir un puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
    console.log('El servidor esta funcionando en el puerto 3000')
});