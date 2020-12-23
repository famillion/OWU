module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        age: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
        photos: {
          type: Sequelize.DataTypes.STRING
        },
        docs: {
          type: Sequelize.DataTypes.STRING
        }
      }
    );
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
