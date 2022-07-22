const ClienteService = require('../services/clienteService');

const getById = async (req, res) => {
  const { id } = req.params;
  const [cliente] = await ClienteService.getById(id);

  if (!cliente.length) {
    return res.status(404).json({ message: 'cliente não encontrado' });
  }
   res.status(200).json(cliente[0]);
};

const updateSaque = async (req, res, _next) => {
  const { id, saldo } = req.body;

  const [clienteById] = await ClienteService.getById(id);

  console.log(clienteById[0].saldo);
  
  if (clienteById.length === 0) return res.status(404).json({ message: 'cliente não encontrado' });
  
  if (clienteById[0].saldo < saldo || saldo === 0) {
    return res.status(404).json({ message: 'valor para "Saque" insuficiente' });
  }

  const saldoAtual = clienteById[0].saldo - saldo; 

  await ClienteService.updateSaque(id, saldoAtual);

  return res.status(200).json(req.body);
};

const updateDeposito = async (req, res, _next) => {
  const { id, saldo } = req.body;

  const [clienteById] = await ClienteService.getById(id);
  
  if (clienteById.length === 0) return res.status(404).json({ message: 'cliente não encontrado' });
  
  const saldoAtual = (saldo) + (+clienteById[0].saldo);

  await ClienteService.updateDeposito(id, saldoAtual);

  return res.status(200).json(req.body);
};

module.exports = { getById, updateSaque, updateDeposito };