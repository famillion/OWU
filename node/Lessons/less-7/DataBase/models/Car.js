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
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    photos: {
      type: DataTypes.STRING
    },
    docs: {
      type: DataTypes.STRING
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
