const fse = require('fs-extra');

const { join } = require('path');

const {
  name: { findName },
  internet: { email, userName, password },
  address: { country, city, streetAddress },
  image: { image },
  lorem: { words }
} = require('faker');

const pathNameUsersDBJson = join(process.cwd(), 'usersDB', 'users.json');
const pathNameLogs = join(process.cwd(), 'usersDB', 'logs');
const cookiesFile = join(process.cwd(), 'usersDB', 'cookies', 'userCookies.json');

const createUsersDB = (count) => {
  const usersArr = [];

  for (let i = 0; i < count; i++) {
    const user = {
      name: findName(),
      userName: userName(),
      email: email(),
      password: password(),
      avatar: image(),
      country: country(),
      city: city(),
      streetAddress: streetAddress(),
      about: words(+(Math.random() * 30).toFixed())
    };
    usersArr.push(user);
  }
  fse.outputJson(pathNameUsersDBJson, usersArr)
    .catch((err) => fse.appendFile(pathNameLogs, `Creating error! ${getTimeIsNow()}: ${err} \n`));
};

const registerCheck = async (regUserEmail) => {
  let users = [];

  await fse.readJson(pathNameUsersDBJson)
    .then((data) => users = [...data]);
  return users.filter((user) => user.email === regUserEmail)[0];
};

const userLogin = async (userEmail, userPass) => {
  let user = {};

  await fse.readJson(pathNameUsersDBJson)
    .then((data) => {
      user = data.filter((user) => user.email === userEmail && user.password === userPass)[0];
    });

  return user;
};

const addNewUser = async (newUser) => {
  await fse.readJson(pathNameUsersDBJson)
    .then((data) => {
      const arr = data;
      const user = { ...newUser, avatar: image() };
      arr.push(user);
      fse.outputJson(pathNameUsersDBJson, arr)
        .catch((err) => fse.appendFile(pathNameLogs, `Add new User error! ${getTimeIsNow()}: ${err} \n`));
    });
};

const getUsersDBtoArray = async () => {
  let users = [];

  await fse.readJson(pathNameUsersDBJson)
    .then((data) => users = [...data])
    .catch((err) => fse.appendFile(pathNameLogs, `Getting Users Array from DB error!
    ${getTimeIsNow()}: ${err} \n`));

  return users;
};

const setUserCookies = async (user) => {
  const userCookies = { ...user, isLogin: true };

  await fse.outputJson(cookiesFile, userCookies)
    .catch((err) => fse.appendFile(pathNameLogs, `set Cookies error! 
        ${getTimeIsNow()}: ${err} \n`));
};

const userLogout = () => {
  fse.remove(cookiesFile)
    .catch((err) => fse.appendFile(pathNameLogs, `logout error! 
        ${getTimeIsNow()}: ${err} \n`));
};

const isLoginUser = async () => {
  let user;

  await fse.ensureFile(cookiesFile)
    .then(() => fse.readJson(cookiesFile)
      .then((data) => {
        user = data;
        return data;
      })
      .catch((err) => fse.appendFile(pathNameLogs, `isLogout error! 
                ${getTimeIsNow()}: ${err} \n`)));

  return user;
};

function getTimeIsNow() {
  const ts = Date.now();
  const date = new Date();

  date.setTime(ts);

  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    + ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

module.exports = {
  join,
  createUsersDB,
  registerCheck,
  userLogin,
  addNewUser,
  getUsersDBtoArray,
  setUserCookies,
  userLogout,
  isLoginUser
};
