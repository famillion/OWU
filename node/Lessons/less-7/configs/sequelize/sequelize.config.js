const {
  DB_NAME, DB_PASSWORD, DB_USERNAME, HOST, DIALECT_DB
} = require('../config/config');

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: HOST,
    dialect: DIALECT_DB
  }
};
