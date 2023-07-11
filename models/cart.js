const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema for the Cart model
const cartSchema = new Schema(
  {
    // amount: Number,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    foodItems: [{ type: Schema.Types.ObjectId, ref: 'FoodItem' }]
  },
  {
    timestamps: true
  }
)

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart
