const fse = require('fs-extra');
const path = require('path');

const {name: {firstName, lastName}, random: {number, boolean, uuid}} = require('faker');

const createUser = (id, name, age, gender) => {
  return {
    id,
    name,
    age,
    gender: gender ? 'male' : 'female',
  }
}

const createUsersInDir = (pathName, usersCount, gobDir) => {
  const usersArr = [];
  const dirPath = path.join(gobDir, 'dir', 'users', pathName);

  for (let i = 0; i < usersCount; i++) {
    const user = createUser(uuid(), `${firstName()} ${lastName()}`, number(80), boolean())
    usersArr.push(user);
  }

  fse.ensureDir(dirPath)
    .then(() => {
      for (let userObj of usersArr) {
        const fileName = `${userObj.name.split(' ').join('_')}.txt`;
        const userData = JSON.stringify(userObj);
        fse.outputFile(path.join(dirPath, fileName), userData)
          .then(() => console.log(`file ${fileName} created!`))
          .catch(err => console.error(err));
      }
    })
    .catch(err => console.error(err));
}

const moveUserFileByGender = (fromPath, malePath, femalePath, globDir) => {
  const pj = path.join;
  const from = pj(globDir, 'dir', 'users', fromPath);
  const male = pj(globDir, 'dir', 'users', malePath);
  const female = pj(globDir, 'dir', 'users', femalePath);

  let maleCount = 0, femaleCount = 0;

  fse.readdir(from,)
    .then(files => {

      files.forEach(file => {
        fse.readFile(pj(from, file))
          .then(data => {
            const json = JSON.parse(data);

            switch (json.gender) {
              case "male":
                fse.move(pj(from, file), pj(male, file))
                  .then(() => maleCount++);
                break;
              case "female":
                fse.move(pj(from, file), pj(female, file))
                  .then(() => femaleCount++);
                break;
            }
          });
      });

    });

  setTimeout(() => {
    console.log(`Moved:\nMale: ${maleCount} users\nFemale: ${femaleCount} users`);
  }, 2000);
};

module.exports = {
  createUsersInDir,
  moveUserFileByGender,

};
