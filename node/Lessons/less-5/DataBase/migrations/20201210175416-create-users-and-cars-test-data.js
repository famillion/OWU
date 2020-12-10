const testData = require('../testData/testData');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      testData.users
    );

    await queryInterface.bulkInsert(
      'cars',
      testData.cars
    );
  },
// eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users');

    await queryInterface.bulkDelete('cars');
  }
};
