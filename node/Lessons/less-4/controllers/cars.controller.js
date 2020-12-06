const { carsServices } = require('../services');

const {
  createCar, deleteCar, getAllCars, getCarByID, getCarsByModel, getCarsByUserID, updateCar
} = carsServices;

module.exports = {
  getCars: async (req, res) => {
    try {
      const cars = await getAllCars();

      res.json(cars);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  findCarsByModel: async (req, res) => {
    try {
      const cars = await getCarsByModel(req.query.model);

      res.json(cars);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  findCarByID: async (req, res) => {
    try {
      const car = await getCarByID(req.params.id);

      res.json(car);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  findCarByUserID: async (req, res) => {
    try {
      const cars = await getCarsByUserID(req.query.id);

      res.json(cars);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  createCar: async (req, res) => {
    try {
      await createCar(req.body);

      res.status(210).json(req.body);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  updateCar: async (req, res) => {
    try {
      await updateCar(req.body);

      res.status(202).json(req.body);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  deleteCar: async (req, res) => {
    try {
      await deleteCar(req.car.id);

      res.status(410).json(req.car);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },
};
