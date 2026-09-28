const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: { type: String, required: true },
      name: String,
      price: Number,
      quantity: Number,
      image: String,
    },
  ],
  totalAmount: { type: Number, required: true },
  shippingAddress: {
    fullName: String,
    address: String,
    city: String,
    postalCode: String,
    phone: String,
  },
  status: { type: String, default: 'Processing' },
}, { timestamps: true })

const Order = mongoose.model('Order', orderSchema)
module.exports = Order