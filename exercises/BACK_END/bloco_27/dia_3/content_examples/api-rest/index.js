const express = require('express');
const app = express();
const PORT = 3000;

const productController = require('./controllers/ProductsController');
const userController = require('./controllers/UsersController');

app.use(express.json());

app.get('/products', productController.listAll);
app.get('/users', userController.listAll);

app.listen(PORT, () => console.log(`Example app listening on port port!`));
