module.exports = {
  numberCheck: (value) => {
    if (!value) throw new Error('value not set');

    if (Number.isNaN(+value)) throw new Error('value not a number');

    if (+value < 0) throw new Error('value must be positive number');
  },

  userFieldsCheck: (user) => {
    const {
      name, age, email, password
    } = user;

    if (!name.trim()) throw new Error('Name must be set');

    if (!age.toString().trim()) throw new Error('age must be set');

    if (!email.trim()) throw new Error('email must be set');

    if (!password.trim()) throw new Error('password must be set');
  },

  carFieldsCheck: (car) => {
    const {
      price, model, year
    } = car;

    if (!model.trim()) throw new Error('Model name must be set');

    if (!price.toString().trim()) throw new Error('price must be set');

    if (!year.toString().trim()) throw new Error('year must be set');
  }
};
