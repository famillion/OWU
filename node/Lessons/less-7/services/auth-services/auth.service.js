const { AUTH, getModel } = require('../../DataBase/constants/constModels');

module.exports = {
  createTokenPair: (user_id, tokenPair) => getModel(AUTH).create({ user_id, tokenPair }),

  checkTokenPair: () => {

  }
};
