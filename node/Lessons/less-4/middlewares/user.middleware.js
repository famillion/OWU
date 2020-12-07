const { middlewaresService } = require('../services');

const { USER, getModel } = require('../DataBase/constants/constModels');

module.exports = {
  ageFilterCheck: (req, res, next) => {
    try {
      const { age, isOver } = req.query;

      middlewaresService.numberCheck(age);

      req.filterByAge = { age, isOver };

      next();
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  checkUserById: async (req, res, next) => {
    try {
      const { id } = req.params;

      middlewaresService.numberCheck(id);

      const user = await getModel(USER).findOne({
        where: {
          id
        }
      });

      if (!user) throw new Error('user not found');

      req.user = user;

      next();
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  checkUserFields: (req, res, next) => {
    try {
      middlewaresService.userFieldsCheck(req.body);

      next();
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  checkUserEmail: async (req, res, next) => {
    try {
      const user = await getModel(USER).findAll({
        where: {
          email: req.body.email
        }
      });

      if (user) throw new Error('email is already in use');

      next();
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
};
