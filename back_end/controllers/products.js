const Products = require("../models/product");

exports.getProducts = (req, res, next) => {
  const products = Products.fetchAll();
  res.send(products);
};
