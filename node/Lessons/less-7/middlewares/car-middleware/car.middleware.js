const { middlewaresService } = require('../../services');

const { CAR, getModel } = require('../../DataBase/constants/constModels');

const { ErrorHandler, errorCodes: { NOT_FOUND, BAD_REQUEST } } = require('../../error');

const { carUpdateValidator, carValidator } = require('../../validators');

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
  },

  carValidator: (req, res, next) => {
    try {
      const { error } = carValidator.validate(req.body);

      if (error) throw new ErrorHandler(error.details[0].message, BAD_REQUEST.code);

      next();
    } catch (e) {
      next(e);
    }
  },

  updateCarValidator: (req, res, next) => {
    try {
      const { error } = carUpdateValidator.validate(req.body);

      if (error) throw new ErrorHandler(error.details[0].message, BAD_REQUEST.code);

      next();
    } catch (e) {
      next(e);
    }
  }
};
