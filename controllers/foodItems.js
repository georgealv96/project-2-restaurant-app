// const FoodItem = require('../models/foodItem')

module.exports = {
  index
}

async function index(req, res) {
  res.render('foodItems/index')
}
