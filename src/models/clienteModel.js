const connection = require('./connection');

const getById = (id) => {
  const query = 'SELECT * FROM db_desafio_XP.cliente WHERE id = ?;';

  const clienteId = connection.execute(query, [id]);

  return clienteId;
};

module.exports = { getById };