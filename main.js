//const express = require('express') commonJS
//ecmascript modules:
import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'

//crear la app...
const app = express()

//middleware
app.use('/', usuarioRoutes)



//definir un puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
    console.log('El servidor esta funcionando en el puerto 3000')
});