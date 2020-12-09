const ErrorHandler = require('../error/error-handler/ErrorHandler');

const { BAD_REQUEST } = require('../error/errors-codes/errors');

module.exports = {
  numberCheck: (value) => {
    if (!value) throw new ErrorHandler(`${BAD_REQUEST.message} value not set`, BAD_REQUEST.code);

    if (Number.isNaN(+value)) throw new ErrorHandler(`${BAD_REQUEST.message} value not a number`, BAD_REQUEST.code);

    if (+value < 0) throw new ErrorHandler(`${BAD_REQUEST.message} value must be positive number`, BAD_REQUEST.code);
  },

  userFieldsCheck: (user) => {
    const {
      name, age, email, password
    } = user;

    if (!name.trim()) throw new ErrorHandler(`${BAD_REQUEST.message} Name must be set`, BAD_REQUEST.code);

    if (!age.toString().trim()) throw new ErrorHandler(`${BAD_REQUEST.message} age must be set`, BAD_REQUEST.code);

    if (!email.trim()) throw new ErrorHandler(`${BAD_REQUEST.message} email must be set`, BAD_REQUEST.code);

    if (!password.trim()) throw new ErrorHandler(`${BAD_REQUEST.message} password must be set`, BAD_REQUEST.code);
  },

  carFieldsCheck: (car) => {
    const {
      price, model, year
    } = car;

    if (!model.trim()) throw new ErrorHandler(`${BAD_REQUEST.message} Model name must be set`, BAD_REQUEST.code);

    if (!price.toString().trim()) throw new ErrorHandler(`${BAD_REQUEST.message} price must be set`, BAD_REQUEST.code);

    if (!year.toString().trim()) throw new ErrorHandler(`${BAD_REQUEST.message} year must be set`, BAD_REQUEST.code);
  }
};
