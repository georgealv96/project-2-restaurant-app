const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema for the Reviews model
const reviewsSchema = new Schema(
  {
    content: String,
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    },
    userName: String
  },
  {
    timestamps: true
  }
)

// Schema for the FoodItem model
const foodItemSchema = new Schema(
  {
    name: String,
    price: Number,
    picture: String,
    description: String,
    meal: String,
    reviews: [reviewsSchema],
    addedToCart: Boolean
  },
  {
    timestamps: true
  }
)

// Compiling the schema into a model and exporting it
const FoodItem = mongoose.model('FoodItem', foodItemSchema)
module.exports = FoodItem
