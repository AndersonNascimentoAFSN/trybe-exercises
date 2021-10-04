const LoginServices = require('../services/UsersService');

const create = async (req, res) => {
  const { username, password } = req.body;

  const user = await LoginServices.create({ username, password });

  res.status(200).json(user);
};

module.exports = {
  create,
}