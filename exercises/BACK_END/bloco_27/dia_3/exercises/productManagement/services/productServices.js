const ProductModel = require('../models/productModel');

const getAll = async () => {
  const products = await ProductModel.getAll();
  return products;
}

const getById = async (id) => {
  const products = await ProductModel.getById(id);
  return products;
}

const add = async (name, brand) => {
  const newProduct = await ProductModel.add(name, brand);
  return newProduct;
}

const update = async (id, name, brand) => {
  const product = await ProductModel.update(id, name, brand);
  return product;
}

const exclude = async (id) => {
  await ProductModel.exclude(id);
}

module.exports = {
  getAll,
  getById,
  add,
  update,
  exclude,
}
