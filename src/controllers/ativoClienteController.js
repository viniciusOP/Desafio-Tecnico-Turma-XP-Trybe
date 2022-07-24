const AtivoClienteService = require('../services/ativoClienteService');

const getById = async (req, res) => {
  const { id } = req.params;
  const [cliente] = await AtivoClienteService.getById(id);

  if (!cliente.length) {
    return res.status(404).json({ message: 'Cliente não encontrado' });
  }
   res.status(200).json(cliente);
};

module.exports = { getById };