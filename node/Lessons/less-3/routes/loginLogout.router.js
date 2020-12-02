const { Router } = require('express');

const { loginLogoutController } = require('../controllers');

const { logonLogoutMiddleware } = require('../middlewares');

const loginLogoutRouter = Router();

loginLogoutRouter.get('/login', logonLogoutMiddleware.isUserLoginNow, loginLogoutController.showLoginPage);

loginLogoutRouter.get('/register', logonLogoutMiddleware.isUserLoginNow, loginLogoutController.showRegisterPage);

loginLogoutRouter.get('/profile', logonLogoutMiddleware.isUserLoginNow, loginLogoutController.toHome);

loginLogoutRouter.post('/profile', logonLogoutMiddleware.userLoginSucces, logonLogoutMiddleware.isUserLoginNow, loginLogoutController.toProfile);

loginLogoutRouter.get('/logout', logonLogoutMiddleware.isLogout, loginLogoutController.logout);

loginLogoutRouter.get('/', logonLogoutMiddleware.isUserLoginNow, loginLogoutController.toHome);

loginLogoutRouter.get('/edit-profile', logonLogoutMiddleware.userToEdit, loginLogoutController.toEditPage);

module.exports = loginLogoutRouter;
