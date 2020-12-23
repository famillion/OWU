const jwt = require('jsonwebtoken');
const { authValidator } = require('../../validators');
const { authService } = require('../../services');
const {
  ErrorHandler, errorCodes: {
    NOT_FOUND_TOKEN,
    WRONG_EMAIL_OR_PASSWORD,
    NOT_VALID_TOKEN,
    PERMISSION_DENIED
  }
} = require('../../error');

const { usersServices: { getUserByEmail } } = require('../../services');
const { userPassHelper: { compare } } = require('../../helpers');
const { constants: { AUTHORIZATION } } = require('../../configs');
const { config: { ACCESS_TOKEN_WORD, REFRESH_TOKEN_WORD } } = require('../../configs');

module.exports = {
  userEmailAndPassCheck: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await getUserByEmail(email);

      if (!user) throw new ErrorHandler(WRONG_EMAIL_OR_PASSWORD.message, WRONG_EMAIL_OR_PASSWORD.code);

      await compare(password, user.password);

      req.user = user;

      next();
    } catch (e) {
      next(e);
    }
  },

  userAuthValidator: (req, res, next) => {
    try {
      const { error } = authValidator.validate(req.body);

      if (error) throw new ErrorHandler(error.details[0].message, WRONG_EMAIL_OR_PASSWORD.code);

      next();
    } catch (e) {
      next(e);
    }
  },

  checkAccessToken: async (req, res, next) => {
    try {
      const access_token = req.get(AUTHORIZATION);

      if (!access_token) throw new ErrorHandler(NOT_FOUND_TOKEN.message, NOT_FOUND_TOKEN.code);

      jwt.verify(access_token, ACCESS_TOKEN_WORD, (err) => {
        if (err) throw new ErrorHandler(NOT_VALID_TOKEN.message, NOT_VALID_TOKEN.code);
      });

      const userAndCarWithToken = await authService.getUserWithTokenByParams({ access_token });

      if (!userAndCarWithToken) throw new ErrorHandler(NOT_VALID_TOKEN.message, NOT_VALID_TOKEN.code);

      req.user = userAndCarWithToken;

      next();
    } catch (e) {
      next(e);
    }
  },

  checkRefreshToken: async (req, res, next) => {
    try {
      const refresh_token = req.get(AUTHORIZATION);

      if (!refresh_token) throw new ErrorHandler(NOT_FOUND_TOKEN.message, NOT_FOUND_TOKEN.code);

      jwt.verify(refresh_token, REFRESH_TOKEN_WORD, (err) => {
        if (err) throw new ErrorHandler(NOT_VALID_TOKEN.message, NOT_VALID_TOKEN.code);
      });

      const userAndCarWithToken = await authService.getUserWithTokenByParams({ refresh_token });

      if (!userAndCarWithToken) throw new ErrorHandler(NOT_VALID_TOKEN.message, NOT_VALID_TOKEN.code);

      req.user = userAndCarWithToken;

      next();
    } catch (e) {
      next(e);
    }
  },

  checkUserForbidByParams: (req, res, next) => {
    try {
      if (req.user.id !== req.params.id) throw new ErrorHandler(PERMISSION_DENIED.message, PERMISSION_DENIED.code);

      next();
    } catch (e) {
      next(e);
    }
  }
};
