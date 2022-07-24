const connection = require('./connection');

const getById = (clienteId) => {
  const query = 'SELECT * FROM db_desafio_XP.ativos_clientes WHERE cliente_id = ?;';

  const ativoClienteId = connection.execute(query, [clienteId]);

  return ativoClienteId;
};

module.exports = { getById };