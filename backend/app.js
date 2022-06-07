const express = require('express');
const cors = require('cors');
const routes = require('./routes');
// const Usuario = require('./models/Usuario')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', routes);

app.listen(3000, () => {
    console.log(`Servidor rodando no http://localhost:${port}/`);
})