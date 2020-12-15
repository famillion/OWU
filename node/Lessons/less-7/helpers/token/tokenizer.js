const jwt = require('jsonwebtoken');

const { config: { ACCESS_TOKEN_WORD, REFRESH_TOKEN_WORD } } = require('../../configs');

module.exports = () => {
  const access_token = jwt.sign({}, ACCESS_TOKEN_WORD, { expiresIn: '10m' });
  const refresh_token = jwt.sign({}, REFRESH_TOKEN_WORD, { expiresIn: '10d' });

  return {
    access_token,
    refresh_token
  };
};
