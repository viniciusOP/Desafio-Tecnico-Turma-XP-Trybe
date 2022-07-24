module.exports = (req, res, next) => {
    const { id, saldo } = req.body;
  
    if (!saldo || saldo === 0 || saldo < 0) {
        return res.status(400).json({ message: '"saldo" é obrigatório e deve ser maior que zero' });
    }
  
    if (!id) {
      return res.status(400).json({ message: '"id" código do cliente é obrigatório' });
    }
    next();
  };