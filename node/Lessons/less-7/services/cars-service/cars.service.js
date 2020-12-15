const { CAR, getModel } = require('../../DataBase/constants/constModels');

module.exports = {
  getAllCars: () => getModel(CAR).findAll(),

  getCarsByModel: (model) => getModel(CAR).findAll({
    where: {
      model
    }
  }),
  getCarsByUserID: (userID) => getModel(CAR).findAll({
    where: {
      user_id: userID
    }
  }),

  getCarByID: (id) => getModel(CAR).findOne({
    where: {
      id
    }
  }),
  createCar: (car) => getModel(CAR).create({ ...car }),

  updateCar: (car) => getModel(CAR).update({ ...car }, {
    where: {
      id: car.id
    }
  }),
  deleteCar: (id) => getModel(CAR).destroy({
    where: {
      id
    }
  })
};
