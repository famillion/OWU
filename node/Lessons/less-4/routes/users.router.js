const { Router } = require('express');

const { usersController } = require('../controllers');

const { userMiddleware } = require('../middlewares');

const usersRouter = Router();

usersRouter.get('/', usersController.getUsers);

usersRouter.get('/filter', usersController.findUserByEmail);

usersRouter.get('/filter-by-age', userMiddleware.ageFilterCheck, usersController.ageFilter);

usersRouter.get('/:id', userMiddleware.checkUserById, usersController.findUserByID);

usersRouter.post('/',
  userMiddleware.checkUserFields,
  userMiddleware.checkUserEmail,
  usersController.createUser);

usersRouter.put('/',
  userMiddleware.checkUserFields,
  userMiddleware.checkUserEmail,
  usersController.updateUser);

usersRouter.delete('/:id', userMiddleware.checkUserById, usersController.deleteUser);

module.exports = usersRouter;
