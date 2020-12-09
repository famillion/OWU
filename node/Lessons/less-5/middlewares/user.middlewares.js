const { middlewaresService } = require('../services');

const { USER, getModel } = require('../DataBase/constants/constModels');

const { ErrorHandler, errorCodes: { NOT_FOUND, UNAUTHORIZED } } = require('../error');

module.exports = {
  ageFilterCheck: (req, res, next) => {
    try {
      const { age, isOver } = req.query;

      middlewaresService.numberCheck(age);

      req.filterByAge = { age, isOver };

      next();
    } catch (e) {
      next(e);
    }
  },

  checkUserById: async (req, res, next) => {
    try {
      const { id } = req.params;

      middlewaresService.numberCheck(id);

      const user = await getModel(USER).findOne({
        where: {
          id
        }
      });

      if (!user) throw new ErrorHandler(`user ${NOT_FOUND.message}`, NOT_FOUND.code);

      req.user = user;

      next();
    } catch (e) {
      next(e);
    }
  },

  checkUserFields: (req, res, next) => {
    try {
      middlewaresService.userFieldsCheck(req.body);

      next();
    } catch (e) {
      next(e);
    }
  },

  checkUserEmail: async (req, res, next) => {
    try {
      const user = await getModel(USER).findAll({
        where: {
          email: req.body.email
        }
      });

      if (user) throw new ErrorHandler(`${UNAUTHORIZED.message}! email is already in use`, UNAUTHORIZED.code);

      next();
    } catch (e) {
      next(e);
    }
  }
};
