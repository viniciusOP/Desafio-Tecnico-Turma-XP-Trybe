const connection = require('./connection');

const getById = (id) => {
  const query = 'SELECT * FROM db_desafio_XP.cliente WHERE id = ?;';

  const clienteId = connection.execute(query, [id]);

  return clienteId;
};

const updateSaque = async (id, saldo) => {
  const query = 'UPDATE db_desafio_XP.cliente SET saldo = ? WHERE id = ?';

  await connection.execute(query, [saldo, id]);

  return { id, saldo };
};

const updateDeposito = async (id, saldo) => {
  await connection.execute('UPDATE db_desafio_XP.cliente SET saldo = ? WHERE id = ?', [saldo, id]);

  return { id, saldo };
};

module.exports = { getById, updateSaque, updateDeposito };