const fse = require('fs-extra');

const path = require('path');

const { Sequelize, DataTypes } = require('sequelize');

module.exports = (() => {
  let instance;

  const initInstance = () => {
    const models = {};

    const client = new Sequelize('smart_garage', 'admin', 'metal666', {
      host: 'localhost',
      dialect: 'mysql'
    });

    const getModels = () => {
      const modelsPath = path.join(process.cwd(), 'DataBase', 'models');

      fse.readdir(modelsPath)
        .then((files) => files.forEach((file) => {
          const [model] = file.split('.');

          models[model] = (require(path.join(modelsPath, file)))(client, DataTypes);
        }));
    };

    return {
      initModels: () => getModels(),
      getModel: (modelName) => models[modelName]
    };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = initInstance();
      }

      return instance;
    }
  };
})();
