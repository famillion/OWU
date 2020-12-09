const { Op } = require('sequelize');

const { USER, getModel } = require('../DataBase/constants/constModels');

module.exports = {
  createUser: (user) => getModel(USER).create({ ...user }),

  getAllUsers: () => getModel(USER).findAll(),

  getUserByEmail: (email) => getModel(USER).findOne({
    where: {
      email
    }
  }),

  getUserByID: (id) => getModel(USER).findOne({
    where: {
      id
    }
  }),

  updateUser: (user) => getModel(USER).update(
    { ...user },
    {
      where: {
        id: user.id
      }
    }
  ),

  deleteUserByID: (id) => getModel(USER).destroy({
    where: {
      id
    }
  }),

  filterUsersByAge: (age, isOver) => {
    if (isOver) {
      return getModel(USER).findAll({
        where: {
          age: {
            [Op.lt]: age
          }
        }
      });
    }

    return getModel(USER).findAll({
      where: {
        age: {
          [Op.gt]: age
        }
      }
    });
  }
};
