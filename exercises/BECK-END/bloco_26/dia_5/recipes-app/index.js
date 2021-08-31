const express = require('express');
const bodyParser = require('body-parser');

const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', (_req, res) => {
  res.send('open!');
});

app.use(authMiddleware);

const recipesRouter = require('./recipesRouter');

app.use('/recipes', recipesRouter);

// const recipes = [
//   { id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
//   { id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
//   { id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
// ];

// const validadeName = (req, res, next) => {
//   const { name } = req.body;
//   if(!name || name === '') return res.status(400).json({ message: 'Invalid data!' });

//   next();
// };

// const validadePrice = (req, res, next) => {
//   const { price } = req.body;
//   if (!price || typeof(price) !== 'number' || price < 0) return res.status(400).json({ message: 'Invalid price!'});

//   next();
// };

// const validations = [validadeName, validadePrice];

// app.get('/recipes', (_req,res) => {
//   res.status(200).json(recipes);
// });

// app.post('/recipes', 
//   // (req, res, next) => {
//   //   const { name } = req.body;
//   //   if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

//   //   next();
//   // },
//   // validadeName, validadePrice,
//   validations,
//   (req, res) => {
//     const { id, name, price } = req.body;
//     const { username } = req.user;

//     recipes.push({ id, name, price, chef: username });
//     res.status(201).json({ message: 'Recipe created successfully!' });
//   }
// );

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
