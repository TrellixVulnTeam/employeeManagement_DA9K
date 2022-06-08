const express = require('express');
const usu = require('./controllers/usuario');

const router = express.Router();

router.post('/cadastrar', usu.cadastrarUsuario);
router.get('/pegar', usu.pegarUsuarios);
router.get('/buscar/:nome/:cpf', usu.buscarUsuario);

module.exports = router