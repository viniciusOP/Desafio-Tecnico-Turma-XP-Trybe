const AtivoModel = require('../models/ativoModel');

const getById = (id) => AtivoModel.getById(id);

module.exports = { getById };