import express from "express"

const router = express.Router()


router.get('/', function(req, res) {
    res.send('Hola mundounuouuouou!!')
});

router.get('/nosotros', function(req, res) {
    res.send('informacion de nosotros')
});

export default router