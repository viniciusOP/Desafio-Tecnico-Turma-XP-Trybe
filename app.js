const express = require('express');
const ClienteController = require('./src/controllers/clienteController');
const errorMiddleware = require('./src/middlewares/error');

const app = express();

app.use(express.json());

app.get('/conta/:id', ClienteController.getById);

app.use(errorMiddleware);

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação
module.exports = app;
