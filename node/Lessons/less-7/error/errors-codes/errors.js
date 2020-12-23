const {
  BAD_REQUEST, CREATED, DELETED, FORBIDDEN, NOT_FOUND, UNAUTHORIZED
} = require('./error-codes');

module.exports = {
  USER_CREATED: {
    message: 'User created',
    code: CREATED
  },
  USER_UPDATE: {
    message: 'User updated',
    code: 200
  },
  CAR_CREATED: {
    message: 'Car created',
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

  FILE_LIMIT: {
    message: 'File limit exceeded',
    code: BAD_REQUEST
  },

  FILE_SIZE_LIMIT: {
    message: 'File size limit exceeded',
    code: BAD_REQUEST
  },

  FILES_NOT_FOUND: {
    message: 'Files not found',
    code: NOT_FOUND
  },

  FILE_NOT_VALID: {
    message: 'File format not valid',
    code: BAD_REQUEST
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
  WRONG_FILE_UPLOAD_TARGET: {
    message: 'Set correct upload target in request body',
    code: BAD_REQUEST
  },
  PERMISSION_DENIED: {
    message: 'Permission denied',
    code: FORBIDDEN
  }
};
