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
  const File = require('./UserFile')(client, DataTypes);

  Car.belongsTo(User);
  File.belongsTo(User);
  Auth.belongsTo(User);

  User.hasMany(Car, { onDelete: 'CASCADE', onUpdate: 'CASCADE', foreignKey: 'user_id' });
  User.hasMany(Auth, { onDelete: 'CASCADE', onUpdate: 'CASCADE', foreignKey: 'user_id' });
  User.hasMany(File, { onDelete: 'CASCADE', onUpdate: 'CASCADE', foreignKey: 'user_id' });

  return User;
};
