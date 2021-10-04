require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const LoginController = require('./controllers/LoginController');
const UsersController = require('./controllers/UsersController');


const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/users', UsersController.create);
app.post('/login', LoginController.login);

app.listen(port, () => console.log(`Example app listening on port port!`));