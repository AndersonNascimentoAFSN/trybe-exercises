const express = require('express');
const bodyParser = require('body-parser');

const productController = require('./controllers/productController');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/products', productController.getAll);

app.get('/products/:id', productController.getById);

app.post('/products', productController.add);

app.put('/products/:id', productController.update);

app.delete('/products/:id', productController.exclude);

const PORT = 3000
app.listen(PORT, () => console.log(`Example app listening on port port!`))