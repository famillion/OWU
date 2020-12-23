const { authService } = require('../../services');
const { constants: { AUTHORIZATION, LOGOUT } } = require('../../configs');
const { tokenizer } = require('../../helpers');

module.exports = {
  createUserTokenPair: async (req, res, next) => {
    try {
      const { id } = req.user;
      const tokenPair = tokenizer();

      await authService.createTokenPair(id, tokenPair);

      res.json(tokenPair);
    } catch (e) {
      next(e);
    }
  },

  logout: async (req, res, next) => {
    try {
      const access_token = req.header(AUTHORIZATION);

      await authService.deleteToken({ access_token });

      res.send(LOGOUT);
    } catch (e) {
      next(e);
    }
  },

  refreshToken: async (req, res, next) => {
    try {
      const { id } = req.user;

      await authService.deleteToken({ user_id: id });

      const tokenPair = tokenizer();

      await authService.createTokenPair(id, tokenPair);

      res.json(tokenPair);
    } catch (e) {
      next(e);
    }
  }
};
