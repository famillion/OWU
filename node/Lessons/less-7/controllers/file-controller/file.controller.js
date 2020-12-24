const fse = require('fs-extra').promises;
const path = require('path');
const uuid = require('uuid').v1();

const { fileService: { getFilesByUserID, setFiles } } = require('../../services');
const { ErrorHandler, errorCodes: { WRONG_FILE_UPLOAD_TARGET } } = require('../../error');
const {
  constants: {
    UPLOADED,
    USER_DOC_MAX_UPLOAD,
    USER_PHOTO_MAX_UPLOAD,
  }
} = require('../../configs');

module.exports = {
  fileUpload: async (req, res, next) => {
    try {
      const { uploadTarget } = req.body;
      const { photos, docs } = req.uploadFiles;
      const { id } = req.user;
      const { car_id } = req;
      const { isAvatar } = req.body;

      let photosDir;
      let docsDir;

      const USER_FILES_DIR = path.join(process.cwd(), 'public', 'users', `user-${id}`);
      const CAR_FILES_DIR = path.join(process.cwd(), USER_FILES_DIR, 'cars', `car-${car_id}`);

      switch (uploadTarget) {
        case 'user':
          if (isAvatar) {
            photosDir = path.join(process.cwd(), USER_FILES_DIR, 'avatar');
          } else {
            photosDir = path.join(process.cwd(), USER_FILES_DIR, 'photos');
          }

          docsDir = path.join(process.cwd(), USER_FILES_DIR, 'docs');

          break;
        case 'car':
          photosDir = path.join(process.cwd(), CAR_FILES_DIR, 'photos');
          docsDir = path.join(process.cwd(), CAR_FILES_DIR, 'docs');

          break;
        default:
          throw new ErrorHandler(WRONG_FILE_UPLOAD_TARGET.message, WRONG_FILE_UPLOAD_TARGET.code);
      }

      const toUploadDocs = await getFilesByUserID(id, 'docs') || [];
      const toUploadPhotosArr = await getFilesByUserID(id, 'photos') || [];

      for (const photo of photos) {
        const fileExtension = photo.name.split('.').pop();
        const newPhotoName = `${uuid}.${fileExtension}`;

        fse.mkdir(photosDir, { recursive: true })
          .then(() => photo.mv(path.join(photosDir, newPhotoName)))
          .then(() => {
            const filePath = path.join(photosDir, newPhotoName);

            toUploadPhotosArr.push(filePath);

            if (toUploadPhotosArr.length > USER_PHOTO_MAX_UPLOAD) {
              toUploadPhotosArr.shift();
            }
          });
      }

      for (const doc of docs) {
        const fileExtension = doc.name.split('.').pop();
        const newDocName = `${uuid}.${fileExtension}`;

        fse.mkdir(docsDir, { recursive: true })
          .then(() => doc.mv(path.join(docsDir, newDocName)))
          .then(() => {
            const filePath = path.join(docsDir, newDocName);

            toUploadPhotosArr.push(filePath);

            if (toUploadPhotosArr.length > USER_DOC_MAX_UPLOAD) {
              toUploadPhotosArr.shift();
            }
          });
      }

      await setFiles(toUploadPhotosArr, 'photos', req.user);
      await setFiles(toUploadDocs, 'docs', req.user);

      res.json(UPLOADED);
    } catch (e) {
      next(e);
    }
  }
};
