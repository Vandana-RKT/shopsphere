const dns = require('dns')
dns.setServers(['8.8.8.8', '8.8.4.4'])

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Product = require('./models/Product')
const authRoutes = require('./routes/authRoutes')
const orderRoutes = require('./routes/orderRoutes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('MongoDB connection error:', error))

app.get('/', (req, res) => {
  res.send('ShopSphere API is running')
})

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message })
  }
})

app.use('/api/auth', authRoutes)
app.use('/api/orders', orderRoutes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})