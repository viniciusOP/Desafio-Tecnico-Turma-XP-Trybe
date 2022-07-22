const express = require('express');
const ClienteController = require('./src/controllers/clienteController');
const errorMiddleware = require('./src/middlewares/error');
const ValidateSaque = require('./src/middlewares/validateSaque');
const ValidateDeposito = require('./src/middlewares/ValidateDeposito');

const app = express();

app.use(express.json());

app.get('/conta/:id', ClienteController.getById);

app.post('/conta/saque/:id', ValidateSaque, ClienteController.updateSaque);

app.post('/conta/deposito/:id', ValidateDeposito, ClienteController.updateDeposito);

app.use(errorMiddleware);

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação
module.exports = app;
