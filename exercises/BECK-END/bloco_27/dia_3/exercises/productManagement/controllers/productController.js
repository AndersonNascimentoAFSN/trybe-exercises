const express = require('express');
const ProductServices = require('../services/productServices');

const getAll = async (_req, res) => {
  const products = await ProductServices.getAll();

  res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const products = await ProductServices.getById(id);

  res.status(200).json(products);
};

const add = async (req, res) => {
  const { name, brand } = req.body;
  const newProduct = await ProductServices.add(name, brand);

  res.status(201).json(newProduct);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;
  const product = await ProductServices.update(id, name, brand);

  res.status(200).json(product);
}

const exclude = async (req, res) => {
  const { id } = req.params;

  await ProductServices.exclude(id);

  res.status(204).end();
}

// const router = express.Router();

// router.get('/list-products', async (req, res, next) => {
//   const products = await ProductModel.getAll();

//   res.send(products);
// });

// router.get('/get-by-id/:id', async (req, res, next) => {
//   const product = await ProductModel.getById(req.params.id);

//   res.send(product);
// });

// router.post('/add-user', async (req, res) => {
//   const { name, brand } = req.body;

//   const newProduct = await ProductModel.add(name, brand);

//   res.send(newProduct);
// });

// router.post('/delete-user/:id', async (req, res) => {
//   const products = await ProductModel.exclude(req.params.id);

//   res.send(products);
// });

// router.post('/update-user/:id', async (req, res) => {
//   const { name, brand } = req.body;

//   const products = await ProductModel.update(req.params.id, name, brand);

//   res.send(products);
// });

// module.exports = router;


module.exports = {
  getAll,
  getById,
  add,
  update,
  exclude,
};