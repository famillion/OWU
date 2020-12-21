const {
  BAD_REQUEST, CREATED, DELETED, FORBIDDEN, NOT_FOUND, UNAUTHORIZED
} = require('./error-codes');

module.exports = {
  USER_CREATED: {
    message: 'User created',
    code: CREATED
  },
  BAD_REQUEST: {
    message: 'Bed request',
    code: BAD_REQUEST
  },
  NOT_VALID_TOKEN: {
    message: 'Unauthorized. Not valid token',
    code: UNAUTHORIZED
  },
  FORBIDDEN: {
    message: 'Forbidden. The request was correct, but the server refuses to respond.',
    code: FORBIDDEN
  },
  NOT_FOUND: {
    message: 'Resource not found',
    code: NOT_FOUND
  },
  NOT_FOUND_TOKEN: {
    message: 'Token not found',
    code: NOT_FOUND
  },
  USER_DELETED: {
    message: 'User Deleted',
    code: DELETED
  },
  CAR_DELETED: {
    message: 'Car Deleted',
    code: DELETED
  },
  WRONG_EMAIL_OR_PASSWORD: {
    message: 'Wrong email or password',
    code: BAD_REQUEST
  },
  PERMISSION_DENIED: {
    message: 'Permission denied',
    code: FORBIDDEN
  }
};
