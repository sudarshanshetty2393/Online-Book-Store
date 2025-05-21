const express = require('express');
const Product = require('../models/Product');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

// Get All Products (Public)
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add Product (Admin)
router.post('/', auth, adminOnly, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ message: 'Product Added' });
});

// Update Product (Admin)
router.put('/:id', auth, adminOnly, async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: 'Product Updated' });
});

// Delete Product (Admin)
router.delete('/:id', auth, adminOnly, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product Deleted' });
});

module.exports = router;
