module.exports = {
  userValidator: require('./user-validator/user-validator'),
  userUpdateValidator: require('./user-validator/user-update-validator'),
  carValidator: require('./car-validator/car-validator'),
  carUpdateValidator: require('./car-validator/car-update-validator'),
  authValidator: require('./user-validator/auth-validator/auth-validator')
};
