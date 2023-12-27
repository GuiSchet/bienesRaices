//const express = require('express') commonJS
//ecmascript modules:
import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from './config/db.js'

//crear la app...
const app = express()

//conexion a la base de datos
try {
    await db.authenticate();
    console.log('Conexion correcta a la base de datos');

} catch (error) {
    console.log(error);
}

//habilitar pug
app.set('view engine', 'pug')
app.set('views', './views')

//carpeta publica
app.use(express.static('public'))

//middleware
app.use('/auth', usuarioRoutes)

//definir un puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
    console.log('El servidor esta funcionando en el puerto 3000')
});