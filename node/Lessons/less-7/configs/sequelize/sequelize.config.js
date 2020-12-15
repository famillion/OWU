const { DB_NAME, DB_PASSWORD, DB_USERNAME } = require('../config/config');

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};
