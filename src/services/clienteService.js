const ClienteModel = require('../models/clienteModel');

const getById = (id) => ClienteModel.getById(id);

module.exports = { getById };