const { middlewaresService } = require('../services');

const { CAR, getModel } = require('../DataBase/constants/constModels');

const { ErrorHandler, errorCodes: { NOT_FOUND } } = require('../error');

module.exports = {
  checkIsValidID: (req, res, next) => {
    try {
      const { id } = req.params || req.query;

      middlewaresService.numberCheck(id);

      next();
    } catch (e) {
      next(e);
    }
  },

  fieldsCheck: (req, res, next) => {
    try {
      middlewaresService.carFieldsCheck(req.body);

      next();
    } catch (e) {
      next(e);
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

      if (!car) throw new ErrorHandler(NOT_FOUND.message, NOT_FOUND.code);

      req.car = car;

      next();
    } catch (e) {
      next(e);
    }
  }
};
