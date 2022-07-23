const connection = require('./connection');

const getById = (id) => {
  const query = 'SELECT * FROM db_desafio_XP.ativos WHERE id = ?;';

  const ativoId = connection.execute(query, [id]);

  return ativoId;
};

module.exports = { getById };