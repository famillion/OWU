const { Router } = require('express');

const { authMiddleware } = require('../../middlewares');
const { authController } = require('../../controllers');

const authRouter = Router();

authRouter.post(
  '/',
  authMiddleware.userAuthValidator,
  authMiddleware.userEmailAndPassCheck,
  authController.createUserTokenPair
);

module.exports = authRouter;
