const isValidToken = (req, res, next) => {
  const { authorization } = req.headers;
  const regexToken = /^[a-zA-Z0-9]{12}$/;

  if (!authorization || !(regexToken.test(authorization))) return res.status(401).json({ message: 'Invalid token'});

  next();
}

module.exports = {
  isValidToken
};