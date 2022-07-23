const AtivoClienteModel = require('../models/ativoClienteModel');

const getById = (id) => AtivoClienteModel.getById(id);

module.exports = { getById };