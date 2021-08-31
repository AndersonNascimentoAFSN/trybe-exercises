const express = require('express');
const router = express.Router();
const axios  = require('axios');

const { isValidToken } = require('../middleWares/validations');

const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

router.post('/price', isValidToken, async (_req, res) => {
  const result = await axios.get(ENDPOINTEXTERNALAPI);

  res.status(200).json(result.data);
});

module.exports = router;