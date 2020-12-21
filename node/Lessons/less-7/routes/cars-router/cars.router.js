const { Router } = require('express');

const { carsController } = require('../../controllers');

const { authMiddleware, carMiddleware } = require('../../middlewares');

const carsRouter = Router();

carsRouter.get('/', carsController.getCars);

carsRouter.get('/models', carsController.findCarsByModel);

carsRouter.get(
  '/user-filter',
  carMiddleware.checkIsValidID,
  carsController.findCarByUserID
);

carsRouter.get(
  '/:id',
  carMiddleware.checkIsValidID,
  carsController.findCarByID
);

carsRouter.post(
  '/',
  carMiddleware.fieldsCheck,
  carMiddleware.carValidator,
  carsController.createCar
);

carsRouter.put(
  '/',
  authMiddleware.checkAccessToken,
  carMiddleware.fieldsCheck,
  carMiddleware.updateCarValidator,
  carsController.updateCar
);

carsRouter.delete(
  '/:id',
  authMiddleware.checkAccessToken,
  authMiddleware.checkUserForbid,
  carMiddleware.checkCarById,
  carsController.deleteCar
);

module.exports = carsRouter;
