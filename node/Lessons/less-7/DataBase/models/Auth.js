module.exports = (client, DataTypes) => client.define(
  'Auth',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    access_token: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    refresh_token: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
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
    },
    createdAt: {
      type: DataTypes.DATE,
      default: client.fn('NOW')
    }
  },
  {
    tableName: 'auth',
    timestamps: false
  }
);
