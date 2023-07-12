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
    // Finding a cart that matches the user
    const cart = await Cart.findOne({ user: req.user._id })
    // Creating an array with all the information we need to pass to the view
    const itemsInCart = []
    // Setting a variable that will hold the price of all of the items in the cart together
    let totalAmount = 0

    // Iterating throughout the list to search the information of each item in the cart
    for (eachItem of cart.foodItems) {
      // Adding to an array an object that contains the item information and its quantity found in the cart
      itemsInCart.push({
        item: await FoodItem.findById(eachItem.item),
        amount: eachItem.amount
      })
      // Adding the price of each single item multiplied by its quantity
      totalAmount +=
        (await FoodItem.findById(eachItem.item)).price * eachItem.amount
    }

    // Rendering the cart/index view, passing some information
    res.render('cart/index', { cart, itemsInCart, totalAmount })
  } catch (err) {
    res.send(err)
  }
}
