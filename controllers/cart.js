const Cart = require('../models/cart')
const FoodItem = require('../models/foodItem')

module.exports = {
  index
}

async function index(req, res) {
  const items = await Cart.find({})
  items[0].user = req.user._id
  console.log(items)
  res.render('cart/index', { items })
}

// async function update(req, res) {
//   const addedItems = await FoodItem.find({ addedToCart: true })
//   const cart = await Cart.find({  })

//   addedItems.forEach(function(item) {
//     cart.FoodItem.push(item)
//   })

//   res.redirect('/')
// }
