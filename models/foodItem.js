const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema for the Reviews model
const reviewSchema = new Schema(
  {
    content: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
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
    reviews: [reviewSchema]
  },
  {
    timestamps: true
  }
)

// Compiling the schema into a model and exporting it
const FoodItem = mongoose.model('FoodItem', foodItemSchema)
module.exports = FoodItem
