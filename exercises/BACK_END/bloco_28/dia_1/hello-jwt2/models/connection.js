const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { MONGO_DB_URL } = process.env;
// const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const getConnection = () =>
  (db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
        db = conn.db('model_example');
        return db;
      }));

module.exports = {
  getConnection,
};
