const ClienteService = require('../services/clienteService');

const getById = async (req, res) => {
  const { id } = req.params;
  const [cliente] = await ClienteService.getById(id);

  if (!cliente.length) {
    return res.status(404).json({ message: 'cliente não encontrado' });
  }
   res.status(200).json(cliente[0]);
};

const updateSaque = async (req, res, next) => {
  const { id } = req.params;
  const { saldo } = req.body;

  const [clienteById] = await ClienteService.getById(id);

  console.log(clienteById[0].saldo);
  
  if (clienteById.length === 0) return res.status(404).json({ message: 'cliente não encontrado' });
  
  if (clienteById[0].saldo < saldo || saldo === 0) {
    return res.status(404).json({ message: 'valor para "Saque" insuficiente' });
  }

  const saldoAtual = clienteById[0].saldo - saldo; 

  const cliente = await ClienteService.update(id, saldoAtual);

  if (cliente) return res.status(200).json(cliente);

  next();
};

const updateDeposito = async (req, res, next) => {
  const { id } = req.params;
  const { saldo } = req.body;

  const [clienteById] = await ClienteService.getById(id);

  const saldoAtual = (saldo) + (+clienteById[0].saldo);
  
  if (clienteById.length === 0) return res.status(404).json({ message: 'cliente não encontrado' });

  const cliente = await ClienteService.updateDeposito(id, saldoAtual);

  if (cliente) return res.status(200).json(cliente);

  next();
};

module.exports = { getById, updateSaque, updateDeposito };