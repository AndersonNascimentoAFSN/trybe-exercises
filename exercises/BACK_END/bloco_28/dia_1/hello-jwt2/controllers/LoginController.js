const LoginService = require('../services/LoginService');

const login = async (req, res) => {
  const { username, password } = req.body;

  const findUser = await LoginService.login({ username, password });

  if (findUser.err) return res.status(404).send(findUser);

  res.status(200).json(findUser);
}

module.exports = { 
  login,
}