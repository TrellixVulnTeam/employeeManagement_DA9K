const express = require('express');
const cors = require('cors');
const routes = require('./routes');
// const Usuario = require('./models/Usuario')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', routes);
    // let checker = true;
    // if (checker) {
    //     await Usuario.create({
    //         nome: req.body.nome,
    //         sobrenome: req.body.sobrenome,
    //         cpf: req.body.cpf,
    //         data_de_nascimento: req.body.data_de_nascimento,
    //         agencia: req.body.agencia,
    //         conta: req.body.conta,
    //         remuneracao: req.body.remuneracao
    //     }).then(() => {
    //         console.log('Usuário cadastrado com sucesso!');
    //     })
    // } else {
    //     console.log('Não foi possível cadastrar o Usuário');
    // }

app.listen(3000, () => {
    console.log(`Servidor rodando no http://localhost:${port}/`);
})