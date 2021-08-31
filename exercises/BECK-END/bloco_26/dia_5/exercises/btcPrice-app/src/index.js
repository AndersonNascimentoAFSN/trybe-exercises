const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');;

const PORT = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const btcRouter = require('./routes/btcRouter');

app.use('/btc', btcRouter);

app.listen(PORT, () => {
  console.log('App rodando na porta 3001');
});
