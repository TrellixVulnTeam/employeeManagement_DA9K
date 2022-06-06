const {Sequelize} = require('sequelize');
const db = require('../configdb');

const Usuario = db.define('funcionarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    data_de_nascimento: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    agencia: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    conta: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    remuneracao: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

Usuario.sync();

module.exports = Usuario;