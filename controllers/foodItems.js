const FoodItem = require('../models/foodItem')
const Cart = require('../models/cart')

module.exports = {
  index,
  show,
  edit
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

/// !!!!!!!!!!!!!!!!! FIX THIS
async function edit(req, res) {
  const foodItem = await FoodItem.findById(req.params.id)
  const cart = await Cart.find({})
  console.log(cart)
  // cart.foodItems.push(req.params.id)
  // await cart.save()
  // console.log(cart)
  res.redirect(`/foodItems/${req.params.id}`)
}
