const express = require('express');
const router = express.Router();
const { readContentFile, writeContentFile } = require('../utils/readWriteFile');
const { 
  isValidCountry,
  isValidInitials,
  isValidName } = require('../middleWares/validationsTeams');

const PATH_FILE = './teams.json';

router.get('/', async (_req, res) => {
  const teams = await readContentFile(PATH_FILE) || [];
  // if (!teams) return res.status(200).json({ "teams": []});

  res.status(200).json({ teams });
});

const validations = [
  isValidName,
  isValidInitials,
  isValidCountry,
];

router.post('/', validations, async (req, res) => {
  const { name, initials, country, league } = req.body;
  const newTeam = {
    name,
    initials: initials.toUpperCase(),
    country,
    league
  };

  const team = await writeContentFile(PATH_FILE, newTeam);

  res.status(200).json(team);
});

module.exports = router;
