const Usuario = require('../models/Usuario');

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

}

module.exports = cadastrarUsuario, pegarUsuarios;