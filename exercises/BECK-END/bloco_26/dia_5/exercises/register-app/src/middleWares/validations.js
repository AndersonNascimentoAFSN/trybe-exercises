const validateUsername = (req, res, next) => {
  const { username } = req.body;
  if (!username || username.length < 3) return res.status(400).json({ message: 'Invalid username' });

  next();
}

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regexEmail = /\w+\@\w+\.\w+/;

  if (!email || !(regexEmail.test(email))) return res.status(400).json({ message: 'Invalid email'});

  next();
}

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const regexPassword = /^[0-9]{4,8}$/

  if (!password || !regexPassword.test(password)) return res.status(400).json({ message: 'Invalid password' });

  next();
}

module.exports = {
  validateUsername,
  validateEmail,
  validatePassword
};
