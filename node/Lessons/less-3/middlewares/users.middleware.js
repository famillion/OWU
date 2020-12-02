const { registerCheck, getUsersDBtoArray } = require('../services/services');

module.exports = {
  registerCheckUser: (req, res, next) => {
    const { email, password } = req.body;

    try {
      registerCheck(email)
        .then((user) => {
          if (user) return res.render('register', { haveEmail: !email, havePass: !password });

          getUsersDBtoArray()
            .then((allUsers) => {
              req.userProps = { allUsers, user };
              next();
            });
        });
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  searchingUser: (req, res, next) => {
    const { email } = req.query;
    try {
      registerCheck(email)
        .then((user) => {
          if (user) {
            req.user = user;
            return next();
          }
          res.send('<div><h1>User is not founded</h1></div>');
        });
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
};
