const Cart = require('../models/cart')
const FoodItem = require('../models/foodItem')

module.exports = {
  index
}

// !!!!!!!!!!!!!!!!! FIX THIS
async function index(req, res) {
  const cart = await Cart.find({})
  try {
    // If there's not a user logged in then just show the cart page with an error message
    if (!req.user)
      return res.render('cart/index', {
        errorMsg: 'You need to log in first to see the cart!'
      })
    // Assiging the cart to a user
    cart[0].user = req.user._id
    console.log(cart[0])
    // Showing the cart page
    res.render('cart/index', { cart: cart[0] })
  } catch (err) {
    res.send(err)
  }
}
