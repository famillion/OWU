const {
  DB_NAME, DB_PASSWORD, DB_USERNAME, HOST
} = require('../config/config');

module.exports = {
  development: {
    username: DB_USERNAME || 'admin',
    password: DB_PASSWORD || 'metal666',
    database: DB_NAME || 'smart_garage',
    host: HOST || '127.0.0.1',
    dialect: 'mysql'
  }
};
