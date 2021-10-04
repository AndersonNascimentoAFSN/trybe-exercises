const mongoConnection = require('./connection');

const COLLECTION_USERS = 'users';

const create = async (user) => {
  const usersCollection = await mongoConnection.getConnection()
    .then((db) => db.collection(COLLECTION_USERS));

  const { insertedId: _id } = await usersCollection.insertOne(user);

  return {
    _id,
    ...user
  }
}

module.exports = {
  create,
}