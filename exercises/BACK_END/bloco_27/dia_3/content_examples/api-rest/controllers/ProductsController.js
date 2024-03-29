const productModel = require('../models/Products');


const listAll = (req, res) => {
  try {
    const data = productModel.getAll();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
}

module.exports = { listAll };