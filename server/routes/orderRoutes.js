const express = require('express')
const Order = require('../models/Order')
const protect = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/', protect, async (req, res) => {
  try {
    const { items, totalAmount, shippingAddress } = req.body
    const order = await Order.create({
      user: req.userId,
      items,
      totalAmount,
      shippingAddress,
    })
    res.status(201).json(order)
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error: error.message })
  }
})

router.get('/myorders', protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId }).sort({ createdAt: -1 })
    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error: error.message })
  }
})

module.exports = router