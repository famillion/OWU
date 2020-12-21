const {
  AUTH, CAR, USER, getModel
} = require('../../DataBase/constants/constModels');

module.exports = {
  createTokenPair: (user_id, tokenPair) => getModel(AUTH).create({ user_id, ...tokenPair }),

  getUserWithTokenByParams: (findObj) => getModel(USER).findOne({
    include: [
      {
        model: getModel(AUTH),
        where: findObj,
      },
      {
        model: getModel(CAR)
      }
    ]
  })
};
