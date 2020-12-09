const { Router } = require('express');

const { carsController } = require('../controllers');

const { carMiddleware } = require('../middlewares');

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
  carsController.createCar
);

carsRouter.put(
  '/',
  carMiddleware.fieldsCheck,
  carsController.updateCar
);

carsRouter.delete('/:id', carMiddleware.checkCarById, carsController.deleteCar);

module.exports = carsRouter;
