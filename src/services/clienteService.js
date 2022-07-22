const ClienteModel = require('../models/clienteModel');

const getById = (id) => ClienteModel.getById(id);

const updateSaque = async (id, saldo) => {
  const cliente = await ClienteModel.updateSaque(id, saldo);
  return cliente;
};

const updateDeposito = async (id, saldo) => {
  const cliente = await ClienteModel.updateDeposito(id, saldo);
  return cliente;
};

module.exports = { getById, updateSaque, updateDeposito };