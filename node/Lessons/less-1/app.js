let {createUsersInDir, moveUserFileByGender} = require('./dependencies/users_deps');

let allUsersDirName = 'all-users';
let maleUsersDirName = 'male-users';
let femaleUsersDirName = 'female-users';

//++++++++ Create users in ./dir/users/all-users
createUsersInDir(allUsersDirName, 20, __dirname);

//+++++++++ Move users to folders by gender
setTimeout(() => {
  moveUserFileByGender(allUsersDirName, maleUsersDirName, femaleUsersDirName, __dirname);
}, 10000);







