const FoodItem = require('../models/foodItem')

module.exports = {
  index
}

async function index(req, res) {
  const foodItems = await FoodItem.find({})
  console.log(foodItems)
  res.render('foodItems/index', { foodItems })
}
