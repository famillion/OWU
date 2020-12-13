const { carsServices } = require('../services');

const { errorCodes: { CREATED, DELETED } } = require('../error');

const {
  createCar, deleteCar, getAllCars, getCarByID, getCarsByModel, getCarsByUserID, updateCar
} = carsServices;

module.exports = {
  getCars: async (req, res, next) => {
    try {
      const cars = await getAllCars();

      res.json(cars);
    } catch (e) {
      next(e);
    }
  },

  findCarsByModel: async (req, res, next) => {
    try {
      const cars = await getCarsByModel(req.query.model);

      res.json(cars);
    } catch (e) {
      next(e);
    }
  },

  findCarByID: async (req, res, next) => {
    try {
      const car = await getCarByID(req.params.id);

      res.json(car);
    } catch (e) {
      next(e);
    }
  },

  findCarByUserID: async (req, res, next) => {
    try {
      const cars = await getCarsByUserID(req.query.id);

      res.json(cars);
    } catch (e) {
      next(e);
    }
  },

  createCar: async (req, res, next) => {
    try {
      await createCar(req.body);

      res.status(CREATED.code).json(req.body);
    } catch (e) {
      next(e);
    }
  },

  updateCar: async (req, res, next) => {
    try {
      await updateCar(req.body);

      res.json(req.body);
    } catch (e) {
      next(e);
    }
  },

  deleteCar: async (req, res, next) => {
    try {
      await deleteCar(req.car.id);

      res.status(DELETED.code).json(req.car);
    } catch (e) {
      next(e);
    }
  },
};
