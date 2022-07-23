const AtivoClienteModel = require('../models/ativoClienteModel');

const getById = (clienteId) => AtivoClienteModel.getById(clienteId);

module.exports = { getById };