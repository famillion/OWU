const {
  ErrorHandler, errorCodes: {
    FILES_NOT_FOUND,
    FILE_LIMIT,
    FILE_SIZE_LIMIT,
    FILE_NOT_VALID,
    WRONG_FILE_UPLOAD_TARGET
  }
} = require('../../error');

const {
  constants: {
    DOC_MAX_SIZE,
    DOC_MIME_TYPES,
    PHOTO_MAX_SIZE,
    PHOTO_MIME_TYPES,
    CAR_DOC_MAX_UPLOAD,
    CAR_PHOTO_MAX_UPLOAD,
    USER_DOC_MAX_UPLOAD,
    USER_PHOTO_MAX_UPLOAD
  }
} = require('../../configs');

module.exports = {
  checkUploadFiles: (req, res, next) => {
    try {
      const { files } = req;

      if (!files || Object.keys(files).length === 0) {
        throw new ErrorHandler(FILES_NOT_FOUND.message, FILES_NOT_FOUND.code);
      }

      const allFiles = Object.values(files);

      const photos = [];
      const docs = [];

      for (const file of allFiles) {
        const { mimetype, size } = allFiles[file];

        if (PHOTO_MIME_TYPES.includes(mimetype)) {
          if (size > PHOTO_MAX_SIZE) throw new ErrorHandler(FILE_SIZE_LIMIT.message, FILE_SIZE_LIMIT.code);

          photos.push(file);
        } else if (DOC_MIME_TYPES.includes(mimetype)) {
          if (size > DOC_MAX_SIZE) throw new ErrorHandler(FILE_SIZE_LIMIT.message, FILE_SIZE_LIMIT.code);

          docs.push(file);
        } else {
          throw new ErrorHandler(FILE_NOT_VALID.message, FILES_NOT_FOUND.code);
        }
      }

      req.uploadFiles = { photos, docs };

      next();
    } catch (e) {
      next(e);
    }
  },

  checkMaxLimitUploadFiles: (req, res, next) => {
    try {
      const { photos, docs } = req.uploadFiles;
      const { uploadTarget } = req.body;

      let photosMax;
      let
        docsMax;

      switch (uploadTarget) {
        case 'user':
          photosMax = USER_PHOTO_MAX_UPLOAD;
          docsMax = USER_DOC_MAX_UPLOAD;
          break;
        case 'car':
          photosMax = CAR_PHOTO_MAX_UPLOAD;
          docsMax = CAR_DOC_MAX_UPLOAD;
          break;
        default:
          throw new ErrorHandler(WRONG_FILE_UPLOAD_TARGET.message, WRONG_FILE_UPLOAD_TARGET.code);
      }

      if (photos.length > photosMax) {
        throw new ErrorHandler(`${FILE_LIMIT.message}! Too many photos`, FILE_LIMIT.code);
      }

      if (docs.length > docsMax) {
        throw new ErrorHandler(`${FILE_LIMIT.message}! Too many docs`, FILE_LIMIT.code);
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  checkIsAvatar: (req, res, next) => {
    try {
      const { isAvatar } = req.body;
      const { photos } = req.uploadFiles;

      if (isAvatar) {
        if (photos.length > 1) {
          [req.uploadFiles.photos] = photos;
        }
      }

      next();
    } catch (e) {
      next(e);
    }
  }
};
