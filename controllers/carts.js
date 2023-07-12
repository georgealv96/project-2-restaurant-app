const Cart = require('../models/cart')
const FoodItem = require('../models/foodItem')

module.exports = {
  index
}

async function index(req, res) {
  try {
    // If there's not a user logged in, show the cart page with an error message
    if (!req.user)
      return res.render('cart/index', {
        errorMsg: "YOU HAVEN'T LOGGED IN YET!"
      })
    // Find a cart that matches the user
    const cart = await Cart.findOne({ user: req.user._id })
    ////
    // cart.foodItems.forEach(async function (i, index) {
    //   const eachItem = await FoodItem.findById(i)
    //   if (eachItem.addedToCart > 0) {
    //     cart.foodItems.splice(index, 1)
    //   }
    //   eachItem.addedToCart++
    //   await eachItem.save()
    // })
    // const itemsInTheCart = []
    ////
    res.render('cart/index', { cart })
  } catch (err) {
    res.send(err)
  }
}
