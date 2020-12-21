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
      allowNull: true,
      foreignKey: true,
      onDelete: 'cascade',
      onUpdate: 'cascade',
      reference: {
        model: {
          tableName: 'users',
          schema: 'smart_garage'
        },
        key: 'id'
      }
    }
  },
  {
    tableName: 'cars',
    timestamps: false
  }
);
