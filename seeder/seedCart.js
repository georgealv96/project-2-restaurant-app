const mongoose = require('mongoose')
const Cart = require('../models/cart')
require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL)

const carts = [
  {
    user: null,
    foodItems: []
  }
]

async function seedDB() {
  await Cart.deleteMany({})
  await Cart.insertMany(carts)
}

seedDB().then(function () {
  mongoose.connection.close()
})
