const { Router } = require('express');
const { usersController, filesController } = require('../../controllers');
const { authMiddleware, userMiddleware, filesMiddleware } = require('../../middlewares');

const usersRouter = Router();

usersRouter.get('/', usersController.getUsers);

usersRouter.get(
  '/filter',
  usersController.findUserByEmail
);

usersRouter.get('/user-cars', usersController.fundUserCarsByID);

usersRouter.get('/users-with-cars', usersController.fundAllUsersWithCars);

usersRouter.get(
  '/filter-by-age',
  userMiddleware.ageFilterCheck,
  usersController.ageFilter
);

usersRouter.get('/:id', userMiddleware.checkUserById, usersController.findUserByID);

usersRouter.post('/upload/:id',
  userMiddleware.checkUserById,
  authMiddleware.checkAccessToken,
  authMiddleware.checkUserForbidByParams,
  filesMiddleware.checkUploadFiles,
  filesMiddleware.checkMaxLimitUploadFiles,
  filesMiddleware.checkIsAvatar,
  filesController.fileUpload);

usersRouter.post(
  '/',
  userMiddleware.checkUserEmailReg,
  userMiddleware.userValidator,
  usersController.createUser
);

usersRouter.put(
  '/',
  authMiddleware.checkAccessToken,
  userMiddleware.updateUserValidator,
  usersController.updateUser
);

usersRouter.delete(
  '/:id',
  authMiddleware.checkAccessToken,
  authMiddleware.checkUserForbidByParams,
  userMiddleware.checkUserById,
  usersController.deleteUser
);

module.exports = usersRouter;
