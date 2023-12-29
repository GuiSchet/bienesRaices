import Usuario from '../models/Usuario.js'
import { check, validationResult } from 'express-validator'

const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina: 'Iniciar Sesión'
    })
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear Cuenta'
    })
}

const registrar = async (req, res) => {
    //validacion
    await check('nombre').notEmpty.withMessage('El nombre no puede ir vacio').run(req)
    await check('email').isEmail.withMessage('Eso no parece un e-mail').run(req)
    await check('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres').run(req)
    await check('repetir_password').equals('password').withMessage('La contraseña no es igual').run(req)

    let resultado = validationResult(req)
    //verificar que el usuario este vacio


    res.json(resultado.array())
    const usuario = await Usuario.create(req.body)
    res.json(usuario)
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
        pagina: 'Recupera tu acceso a Bienes Raices'
    })
}

export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassword,
    registrar
}