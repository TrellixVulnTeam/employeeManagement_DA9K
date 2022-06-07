const express = require('express');
const usu = require('./controllers/usuario');

const router = express.Router();

router.post('/cadastrar', usu.cadastrarUsuario);
router.get('/pegar', usu.pegarUsuarios);
module.exports = router