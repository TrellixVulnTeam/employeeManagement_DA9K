const express = require('express');
const cadastrarUsuario = require('./controllers/usuario');
const pegarUsuarios = require('./controllers/usuario')

const router = express.Router();

router.post('/cadastrar', cadastrarUsuario);
router.get('pegar', pegarUsuarios);

module.exports = router