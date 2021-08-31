const express = require('express');
const bodyParser = require('body-parser');
const teamsRouter = require('./routers/teamsRouter');
const PORT = 3001;

const app = express();
app.use(bodyParser.json());

app.use('/teams', teamsRouter);

app.listen(PORT, () => {
  console.log('app executando na porta 3001');
});
