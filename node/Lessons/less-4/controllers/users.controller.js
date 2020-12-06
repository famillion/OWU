const { usersServices } = require('../services');

const {
  createUser, deleteUserByID, getAllUsers, getUserByEmail, getUserByID, updateUser, filterUsersByAge
} = usersServices;

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await getAllUsers();

      res.json(users);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  findUserByEmail: async (req, res) => {
    try {
      const user = await getUserByEmail(req.query.email);

      res.json(user);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  findUserByID: async (req, res) => {
    try {
      const user = await getUserByID(req.params.email);

      res.json(user);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  createUser: async (req, res) => {
    try {
      await createUser(req.body);

      res.status(201).json(req.body);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  updateUser: async (req, res) => {
    try {
      await updateUser(req.body);

      res.status(202).json(req.body);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await deleteUserByID(req.user.id);

      res.status(410).json(req.user);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  ageFilter: async (req, res) => {
    try {
      const { age, isOver } = req.filterByAge;

      const users = await filterUsersByAge(age, isOver);

      res.json(users);
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
};
