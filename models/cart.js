const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema for the Cart model
const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    foodItems: [
      { item: { type: Schema.Types.ObjectId, ref: 'FoodItem' }, amount: Number } /// !!!?
    ]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Cart', cartSchema)
