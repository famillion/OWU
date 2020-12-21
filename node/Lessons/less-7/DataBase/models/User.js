module.exports = (client, DataTypes) => {
  const User = client.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'users',
      timestamps: false
    }
  );

  const Auth = require('./Auth')(client, DataTypes);
  const Car = require('./Car')(client, DataTypes);

  User.hasMany(Car, { onDelete: 'CASCADE', foreignKey: 'user_id' });
  Car.belongsTo(User);

  User.hasMany(Auth, { onDelete: 'CASCADE', foreignKey: 'user_id' });
  Auth.belongsTo(User);

  return User;
};
