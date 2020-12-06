module.exports = (client, DataTypes) => client.define(
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
      allowNull: true
    }
  },
  {
    tableName: 'cars',
    timestamps: false
  }
);
