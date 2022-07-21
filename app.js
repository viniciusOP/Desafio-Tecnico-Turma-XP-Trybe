const express = require('express');
const errorMiddleware = require('./src/middlewares/error');

const app = express();

app.use(express.json());

app.use(errorMiddleware);

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação
module.exports = app;
