const LoginModel = require('../models/UsersModel');

const create = async (user) => {
  const newUser = await LoginModel.create(user);
  return newUser;
}

module.exports = {
  create,
}