const { USER, getModel } = require('../../DataBase/constants/constModels');

const { usersServices: { updateUser } } = require('../index');

module.exports = {
  getFilesByUserID: async (id, attrName) => JSON.parse(await getModel(USER).findOne({
    attributes: [attrName],
    where: {
      id
    }
  })),

  setFiles: async (filesArr, attrName, obj) => {
    obj[attrName] = JSON.stringify(filesArr);

    await updateUser(obj);
  }
};
