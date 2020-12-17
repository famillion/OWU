const { authValidator } = require('../../validators');
const { usersServices: { getUserByEmail } } = require('../../services');
const { ErrorHandler, errorCodes: { WRONG_EMAIL_OR_PASSWORD } } = require('../../error');
const { userPassHelper: { compare } } = require('../../helpers');

module.exports = {
  userEmailAndPassCheck: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await getUserByEmail(email);

      if (!user) throw new ErrorHandler(WRONG_EMAIL_OR_PASSWORD.message, WRONG_EMAIL_OR_PASSWORD.code);

      await compare(password, user.password);

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
  }

};
