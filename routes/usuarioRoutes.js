import express from "express"
import { formularioLogin, formularioRegistro, formularioOlvidePassword } from "../controllers/usuarioController.js"

const router = express.Router()


router.get('/login', formularioLogin);
router.get('/registro', formularioRegistro)
router.get('/olvide-password', formularioOlvidepassword)


export default router