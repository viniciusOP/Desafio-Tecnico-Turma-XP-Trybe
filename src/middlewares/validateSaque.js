module.exports = (req, res, next) => {
    const { id, saldo } = req.body;
  
    if (saldo < 0 || saldo === 0) {
      return res.status(422).json({ message: '"saldo" não pode ser menor que ou igual a zero' });
    }
  
    if (!saldo) {
        return res.status(400).json({ message: '"saldo" é obrigatório' });
    }
  
    if (!id) {
      return res.status(400).json({ message: '"id" código do cliente é obrigatório' });
    }
    next();
  };