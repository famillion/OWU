const { Router } = require('express');

const { usersController } = require('../controllers');

const { userMiddleware } = require('../middlewares');

const usersRouter = Router();

usersRouter.get('/', usersController.getUsers);

usersRouter.get('/filter', usersController.findUserByEmail);

usersRouter.get('/user-cars', usersController.fundUserCarsByID);

usersRouter.get('/usersCars', usersController.fundAllUsersWithCars);

usersRouter.get(
  '/filter-by-age',
  userMiddleware.ageFilterCheck,
  usersController.ageFilter
);

usersRouter.get('/:id', userMiddleware.checkUserById, usersController.findUserByID);

usersRouter.use('/',
  userMiddleware.checkUserFields,
  userMiddleware.checkUserEmail);

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
