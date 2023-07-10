const FoodItem = require('../models/foodItem')

module.exports = {
  index,
  show
}

async function index(req, res) {
  // Grabbing every food item from the database
  const foodItems = await FoodItem.find({})
  // Rendering and passing the food items array so it can be used in the views
  res.render('foodItems/index', { foodItems })
}

async function show(req, res) {
  try {
    // Grabbing and individual food item from the database
    const foodItem = await FoodItem.findById(req.params.id)
    // Rendering and passing the food item object so it can be used in the views
    res.render('foodItems/show', { foodItem })
  } catch (err) {
    res.send(err)
  }
}
