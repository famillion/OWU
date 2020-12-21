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

module.exports = authRouter;
