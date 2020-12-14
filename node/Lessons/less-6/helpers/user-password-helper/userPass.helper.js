const bc = require('bcrypt');

const { ErrorHandler, errorCodes: { WRONG_EMAIL_OR_PASSWORD } } = require('../../error');

module.exports = {
  hash: (password) => bc.hash(password, 10),
  compare: async (password, hash) => {
    const isPassEquals = await bc.compare(password, hash);

    if (!isPassEquals) throw new ErrorHandler(WRONG_EMAIL_OR_PASSWORD.message, WRONG_EMAIL_OR_PASSWORD.code);
  }
};
