const express = require('express');

const app = express();

app.use(express.json());

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação
module.exports = app;
