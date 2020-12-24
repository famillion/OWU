module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'cars',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        price: {
          type: Sequelize.DataTypes.DECIMAL,
          allowNull: false
        },
        model: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        year: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
        user_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          foreignKey: true,
          onDelete: 'cascade',
          onUpdate: 'cascade',
          references: {
            model: 'users',
            key: 'id'
          }
        }
      }
    );
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cars', { cascade: true });
  }
};
