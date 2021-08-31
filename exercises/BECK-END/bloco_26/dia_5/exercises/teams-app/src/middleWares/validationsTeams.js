const isValidName = (req, res, next) => {
  const { name } = req.body;

  if (!name || !name.length > 5) return res.status(400).json({ message: 'invalid data' });

  next();
};

const isValidInitials = (req, res, next) => {
  const { initials } = req.body;
  const regex = /^[A-Z]{0,3}$/g;

  if (!initials || !regex.test(initials)) return res.status(400).json({ message: 'invalid data' });

  next();
};

const isValidCountry = (req, res, next) => {
  const { country } = req.body;

  if (!country || country.length <= 3) return res.status(400).json({ message: 'invalid data' });

  next();
};

module.exports = {
  isValidName,
  isValidInitials,
  isValidCountry,
};
