const { middlewaresService } = require('../services');

const { CAR, getModel } = require('../DataBase/constants/constModels');

module.exports = {
  checkIsValidID: (req, res, next) => {
    try {
      const { id } = req.params || req.query;

      middlewaresService.numberCheck(id);

      next();
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  fieldsCheck: (req, res, next) => {
    try {
      middlewaresService.carFieldsCheck(req.body);

      next();
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  checkCarById: async (req, res, next) => {
    try {
      const { id } = req.params;

      middlewaresService.numberCheck(id);

      const car = await getModel(CAR).findAll({
        where: {
          id
        }
      });

      if (!car) throw new Error('car not found');

      req.car = car;

      next();
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
};
