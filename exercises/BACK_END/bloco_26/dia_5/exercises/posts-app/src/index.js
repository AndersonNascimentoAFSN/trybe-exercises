const express = require('express');
const bodyParser = require('body-parser');
const postRouter  = require('./routers/postRouter');
const erros = require('./middleWares/routerNotFound');
const PORT = 3001;

const app = express();
app.use(bodyParser.json());


app.use('/posts', postRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));

app.use(erros.routerNotFound);

app.listen(PORT ,() => {
  console.log('App executando na porta 3001');
});
