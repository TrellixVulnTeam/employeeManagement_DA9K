const Usuario = require('../models/Usuario');
const { Op } = require('sequelize');

async function cadastrarUsuario(req, res) {
    let authentication = true;
    if (authentication) {
        await Usuario.create({
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            cpf: req.body.cpf,
            data_de_nascimento: req.body.data_de_nascimento,
            agencia: req.body.agencia,
            conta: req.body.conta,
            remuneracao: req.body.remuneracao
        }).then(() => {
            console.log('Usuário cadastrado com sucesso!');
        })
    } else {
        console.log('Não foi possível cadastrar o Usuário');
    }
}

async function pegarUsuarios(req, res) {
    const usuarios = await Usuario.findAll();
    return res.status(200).json(usuarios);
}

async function buscarUsuario(req, res) {
    const usuario = await Usuario.findAll({
        where: {
          [Op.or]: [
            { nome: req.params.nome },
            { cpf: req.params.cpf }
          ]
        }
      });
    return res.status(200).json(usuario);
}

module.exports = {
    cadastrarUsuario,
    pegarUsuarios,
    buscarUsuario
}