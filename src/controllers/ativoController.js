const AtivoService = require('../services/ativoService');

const getById = async (req, res) => {
  const { id } = req.params;
  const [ativo] = await AtivoService.getById(id);

  if (!ativo.length) {
    return res.status(404).json({ message: 'ativo não encontrado' });
  }
   res.status(200).json(ativo);
};

module.exports = { getById };