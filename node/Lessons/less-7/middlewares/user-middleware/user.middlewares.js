const { middlewaresService } = require('../../services');

const { usersServices: { getUserByEmail, getUserByID } } = require('../../services');

const {
  ErrorHandler, errorCodes: {
    NOT_FOUND,
    UNAUTHORIZED,
    BAD_REQUEST
  }
} = require('../../error');

const { userValidator, userUpdateValidator } = require('../../validators');

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

      const user = await getUserByID(id);

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

  checkUserEmailReg: async (req, res, next) => {
    try {
      const user = await getUserByEmail(req.body.email);

      if (user) throw new ErrorHandler(`${UNAUTHORIZED.message}! email is already in use`, UNAUTHORIZED.code);

      next();
    } catch (e) {
      next(e);
    }
  },

  queryIdCheck: (req, res, next) => {
    try {
      if (!req.query.user_id) throw new ErrorHandler(`${BAD_REQUEST.message}! user id not found`, BAD_REQUEST.code);

      req.user_id = +req.query.user_id;

      next();
    } catch (e) {
      next(e);
    }
  },

  userValidator: (req, res, next) => {
    try {
      const { error } = userValidator.validate(req.body);

      if (error) throw new ErrorHandler(error.details[0].message, BAD_REQUEST.code);

      next();
    } catch (e) {
      next(e);
    }
  },

  updateUserValidator: (req, res, next) => {
    try {
      const { error } = userUpdateValidator.validate(req.body);

      if (error) throw new ErrorHandler(error.details[0].message, BAD_REQUEST.code);

      next();
    } catch (e) {
      next(e);
    }
  }
};
