const Cart = require('../models/cart')

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
    res.render('cart/index', { cart })
  } catch (err) {
    res.send(err)
  }
}
