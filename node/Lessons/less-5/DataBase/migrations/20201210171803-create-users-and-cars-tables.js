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
          allowNull: false,
        },
        age: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        }
      }
    );

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
          onUpdate: 'cascade',
          onDelete: 'cascade',
          references: {
            model: {
              tableName: 'users',
              schema: 'smart_garage'
            },
            key: 'id'
          }
        }
      }
    );
  },
// eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropAllTables();
  }
};
