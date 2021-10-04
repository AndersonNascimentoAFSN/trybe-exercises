const mongoConnection = require('./connection');

const COLLECTION_USERS = 'users';

const login = async (user) => {

  const loginCollection = await mongoConnection.getConnection()
    .then((db) => db.collection(COLLECTION_USERS));

  const findUser = await loginCollection.findOne(user);

  return findUser;
}

module.exports = { 
  login,
};
