module.exports = (client, DataTypes) => client.define(
  'UserFile',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    extension: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      onUpdate: 'cascade',
      onDelete: 'cascade',
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
    tableName: 'files',
    timestamps: false
  }
);
