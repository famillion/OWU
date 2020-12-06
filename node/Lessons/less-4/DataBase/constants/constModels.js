const db = require('../index').getInstance();

module.exports = {
  getModel: (modelName) => db.getModel(modelName),
  USER: 'User',
  CAR: 'Car',
};
