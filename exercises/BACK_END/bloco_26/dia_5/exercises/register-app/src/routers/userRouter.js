const express = require('express');
const router = express.Router();

const users = [];

const {
  validateUsername,
  validateEmail,
  validatePassword
} = require('../middleWares/validations');

router.get('/users', (_req, res) => {
  res.status(200).json(users);
});

const validations = [validateUsername, validateEmail, validatePassword];

router.post('/register', validations, (req, res) => {
  const { username, email, password } = req.body;

  users.push({ username, email, password });

  res.status(201).json({ message: 'User created successfully!'});
});

const validationsEmailPass = [validateEmail, validatePassword];

router.post('/login' ,validationsEmailPass, (_req, res) => {
  const token = '86567349784e';
  res.status(201).json({ token });
});

module.exports = router;