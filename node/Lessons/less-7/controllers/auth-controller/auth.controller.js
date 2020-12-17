const { authService } = require('../../services');

const { tokenizer } = require('../../helpers');

module.exports = {
  createUserTokenPair: async (req, res, next) => {
    try {
      const { id } = req.body;
      const tokenPair = tokenizer();

      await authService.createTokenPair(id, tokenPair);

      res.json(tokenPair);
    } catch (e) {
      next(e);
    }
  }
};
