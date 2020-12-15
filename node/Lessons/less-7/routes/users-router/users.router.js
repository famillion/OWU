const { Router } = require('express');

const { usersController } = require('../../controllers');

const { userMiddleware, authMiddleware } = require('../../middlewares');

const usersRouter = Router();

usersRouter.get('/', usersController.getUsers);

usersRouter.get('/filter', userMiddleware.checkUserInBase, usersController.findUserByEmail);

usersRouter.get('/user-cars', usersController.fundUserCarsByID);

usersRouter.get('/usersCars', usersController.fundAllUsersWithCars);

usersRouter.post(
  '/auth',
  userMiddleware.userAuthValidator,
  authMiddleware.userEmailAndPassCheck,
  usersController.userLogin
);

usersRouter.get(
  '/filter-by-age',
  userMiddleware.ageFilterCheck,
  usersController.ageFilter
);

usersRouter.get('/:id', userMiddleware.checkUserById, usersController.findUserByID);

usersRouter.use('/',
  userMiddleware.checkUserFields,
  userMiddleware.checkUserEmailReg);

usersRouter.post(
  '/',
  userMiddleware.userValidator,
  usersController.createUser
);

usersRouter.put(
  '/',
  userMiddleware.updateUserValidator,
  usersController.updateUser
);

usersRouter.delete('/:id', userMiddleware.checkUserById, usersController.deleteUser);

module.exports = usersRouter;
