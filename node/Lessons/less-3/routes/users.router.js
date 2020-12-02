const { Router } = require('express');

const { userController } = require('../controllers');
const { usersMiddleware } = require('../middlewares');

const usersRouter = Router();

usersRouter.get('/', userController.getUsers);

usersRouter.get('/user', usersMiddleware.searchingUser, userController.getUserByEmail);

usersRouter.post('/', usersMiddleware.registerCheckUser, userController.createUser);

module.exports = usersRouter;
