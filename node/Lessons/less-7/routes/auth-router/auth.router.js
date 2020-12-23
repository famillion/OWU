const { Router } = require('express');

const { authMiddleware } = require('../../middlewares');
const { authController } = require('../../controllers');

const authRouter = Router();

authRouter.post(
  '/',
  authMiddleware.userEmailAndPassCheck,
  authMiddleware.userAuthValidator,
  authController.createUserTokenPair
);

authRouter.get('/logout',
  authController.logout);

authRouter.post('/refresh',
  authMiddleware.checkRefreshToken,
  authController.refreshToken);

module.exports = authRouter;
