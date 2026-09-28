const dns = require('dns')
dns.setServers(['8.8.8.8', '8.8.4.4'])

require('dotenv').config()
const mongoose = require('mongoose')
const Product = require('./models/Product')
const products = require('./data/products')

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB, seeding data...')

    await Product.deleteMany({})
    console.log('Old products cleared')

    await Product.insertMany(products)
    console.log('Products inserted successfully')

    mongoose.connection.close()
  })
  .catch((error) => console.error('Seeding error:', error))