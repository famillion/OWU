const { setUserCookies } = require('../services/services');

module.exports = {
  showLoginPage: (req, res) => {
    const { email, password } = req.isHaveProps;

    res.status(200).render('login', { haveEmail: email, havePass: password });
  },

  showRegisterPage: (req, res) => {
    const { email, password } = res.isHaveProps;

    res.status(200).render('register', { haveEmail: !email, havePass: !password });
  },

  logout: (req, res) => {
    res.status(200).redirect('/');
  },

  toHome: (req, res) => {
    res.status(200).render('home');
  },

  toProfile: (req, res) => {
    const { allUsers, user } = req.usersProps;

    setUserCookies(user)
      .then(() => {
        res.status(200).render('profile', { allUsers, user });
      });
  },

  toEditPage: (req, res) => {
    const { user } = req;

    res.status(200).render('edit-profile', { user });
  }
};
