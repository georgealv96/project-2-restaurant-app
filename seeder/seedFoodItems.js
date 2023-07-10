const mongoose = require('mongoose')
const FoodItem = require('../models/foodItem')
require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL)

const foodItems = [
  {
    name: 'Burger',
    price: 13,
    picture: 'idk',
    reviews: [],
    addedToCart: false
  },
  {
    name: 'Arepa',
    price: 14.65,
    picture: 'some picture',
    reviews: [],
    addedToCart: false
  }
]

async function seedDB() {
  await FoodItem.deleteMany({})
  await FoodItem.insertMany(foodItems)
}

seedDB().then(function () {
  mongoose.connection.close()
})
