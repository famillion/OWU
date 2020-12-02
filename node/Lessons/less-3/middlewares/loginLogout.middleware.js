const { userLogin } = require('../services/services');

const { userLogout, isLoginUser, getUsersDBtoArray } = require('../services/services');

module.exports = {
  isLogout: (req, res, next) => {
    try {
      userLogout();
      next();
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  isUserLoginNow: (req, res, next) => {
    const { email, password } = req.body;

    try {
      isLoginUser()
        .then((user) => {
          if (!user) {
            req.isHaveProps = { email, password };
            return next();
          }

          getUsersDBtoArray()
            .then((allUsers) => {
              res.render('profile', { allUsers, user });
            });
        });
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  userLoginSucces: (req, res, next) => {
    const { email, pass } = req.body;

    try {
      userLogin(email, pass)
        .then((user) => {
          if (user) {
            getUsersDBtoArray()
              .then((allUsers) => {
                req.usersProps = { allUsers, user };
                return next();
              });
          }

          res.render('/login', { haveEmail: !email, havePass: !pass });
        });
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  userToEdit: (req, res, next) => {
    try {
      isLoginUser()
        .then((user) => {
          req.user = user;
          next();
        });
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
};
