module.exports = {
  CURRENT_YEAR: new Date().getFullYear(),
  AUTHORIZATION: 'Authorization',
  LOGOUT: 'user logout',
  PHOTO_MAX_SIZE: 2 * 1024 * 1024,
  DOC_MAX_SIZE: 3 * 1024 * 1024,
  PHOTO_MIME_TYPES: [
    'image/gif',
    'image/jpeg',
    'image/png',
    'image/webp'
  ],
  DOC_MIME_TYPES: [
    'application/pdf',
    'application/msword'
  ],
  USER_PHOTO_MAX_UPLOAD: 1,
  CAR_PHOTO_MAX_UPLOAD: 10,
  USER_DOC_MAX_UPLOAD: 3,
  CAR_DOC_MAX_UPLOAD: 5,
  UPLOADED: 'File uploaded'
};
