const { usersServices } = require('../services');

const { errorCodes: { CREATED, DELETED } } = require('../error');

const {
  createUser, deleteUserByID, getAllUsers, getUserByEmail, getUserByID, updateUser, filterUsersByAge
} = usersServices;

module.exports = {
  getUsers: async (req, res, next) => {
    try {
      const users = await getAllUsers();

      res.json(users);
    } catch (e) {
      next(e);
    }
  },

  findUserByEmail: async (req, res, next) => {
    try {
      const user = await getUserByEmail(req.query.email);

      res.json(user);
    } catch (e) {
      next(e);
    }
  },

  findUserByID: async (req, res, next) => {
    try {
      const user = await getUserByID(req.params.email);

      res.json(user);
    } catch (e) {
      next(e);
    }
  },

  createUser: async (req, res, next) => {
    try {
      await createUser(req.body);

      res.status(201).json(req.body);
    } catch (e) {
      next(e);
    }
  },

  updateUser: async (req, res, next) => {
    try {
      await updateUser(req.body);

      res.status(CREATED.code).json(req.body);
    } catch (e) {
      next(e);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      await deleteUserByID(req.user.id);

      res.status(DELETED.code).json(req.user);
    } catch (e) {
      next(e);
    }
  },

  ageFilter: async (req, res, next) => {
    try {
      const { age, isOver } = req.filterByAge;

      const users = await filterUsersByAge(age, isOver);

      res.json(users);
    } catch (e) {
      next(e);
    }
  }
};
