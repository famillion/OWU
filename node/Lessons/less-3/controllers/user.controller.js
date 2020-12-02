const { addNewUser, getUsersDBtoArray, setUserCookies } = require('../services/services');

module.exports = {
  createUser: (req, res) => {
    try {
      const { allUsers, user } = req.userProps;

      addNewUser(user)
        .then(() => {
          setUserCookies(user)
            .then(() => {
              res.status(200).render('profile', { allUsers, user });
            });
        });
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  getUsers: (req, res) => {
    try {
      getUsersDBtoArray()
        .then((users) => {
          res.status(200).render('all-users', { users });
        });
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  getUserByEmail: (req, res) => {
    const { user } = req;

    res.render('user', { user });
  }
};
