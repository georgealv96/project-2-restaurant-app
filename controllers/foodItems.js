const FoodItem = require('../models/foodItem')
const Cart = require('../models/cart')

module.exports = {
  index,
  show,
  update
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

async function update(req, res) {
  try {
    // Finding the user's cart
    const cart = await Cart.findOne({ user: req.user._id })

    let isInTheCart = false
    // Comparing each item currently in the cart to the selected one
    for (eachItem of cart.foodItems) {
      // If the selected item is already found in the cart, then its amount is going to be increased
      if (eachItem.item.toString() === req.params.id) {
        isInTheCart = true
        eachItem.amount++
      }
    }
    // If the selected item is not in the cart, then add it
    if (!isInTheCart) {
      cart.foodItems.push({
        item: req.params.id,
        amount: 1
      })
    }

    // Saving changes in the database and redirecting
    await cart.save()
    res.redirect(`/foodItems/${req.params.id}`)
  } catch (err) {
    res.send(err)
  }
}
