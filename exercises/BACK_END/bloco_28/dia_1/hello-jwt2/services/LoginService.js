const LoginModel = require('../models/LoginModel');
const LoginSchema = require('../schemas/LoginSchema');

const login = async (user) => {
  const findUser = await LoginModel.login(user);
  
  const auth = LoginSchema.login(findUser);

  if (auth.err) return auth;

  return findUser;
}

module.exports = {
  login,
}