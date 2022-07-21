const ClienteService = require('../services/clienteService');

const getById = async (req, res) => {
    const { id } = req.params;
    const [cliente] = await ClienteService.getById(id);
  
    if (!cliente.length) {
      return res.status(404).json({ message: 'cliente não encontrado' });
    }
     res.status(200).json(cliente[0]);
  };
module.exports = { getById };