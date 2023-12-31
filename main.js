//const express = require('express') commonJS
//ecmascript modules:
import express from 'express'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from './config/db.js'

//crear la app...
const app = express()

// habilitar Cookie Parser

app.use( cookieParser() )

//habilitar CSRF

app.use( csrf({cookie: true}))

//habilitar lectura de datos de formularios
app.use( express.urlencoded({extended: true}))

//conexion a la base de datos
try {
    await db.authenticate();
    db.sync()
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