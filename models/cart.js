const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema for the Cart model
const cartSchema = new Schema(
  {
    foodItems: [{ type: Schema.Types.ObjectId, ref: 'FoodItem' }]
  },
  {
    timestamps: true
  }
)
