const express = require('express');
const pegarUsuarios = require('./controllers/usuario');
const cadastrarUsuario = require('./controllers/usuario');

const router = express.Router();

router.post('/cadastrar', cadastrarUsuario);
router.get('/pegar', pegarUsuarios);
module.exports = router