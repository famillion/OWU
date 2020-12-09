module.exports = (client, DataTypes) => {
  const Car = client.define(
    'Car',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      model: {
        type: DataTypes.STRING,
        allowNull: true
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        foreignKey: true
      }
    },
    {
      tableName: 'cars',
      timestamps: false
    }
  );

  const User = (require('./User'))(client, DataTypes);

  Car.belongsTo(User, { foreignKey: Car.user_id });
};
