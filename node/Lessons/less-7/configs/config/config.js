module.exports = {
  DIALECT_DB: process.env.SEQUELIZE_DB_DIALECT,
  HOST: process.env.SEQUELIZE_HOSTNAME,
  DB_NAME: process.env.SEQUELIZE_DB_NAME,
  DB_USERNAME: process.env.SEQUELIZE_USERNAME,
  DB_PASSWORD: process.env.SEQUELIZE_PASSWORD,
  ACCESS_TOKEN_WORD: process.env.ACCESS_TOKEN_SECRET_WORD,
  REFRESH_TOKEN_WORD: process.env.REFRESH_TOKEN_SECRET_WORD
};
