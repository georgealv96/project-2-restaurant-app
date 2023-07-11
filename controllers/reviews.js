const FoodItem = require('../models/foodItem')

module.exports = {
  create
}

async function create(req, res) {
  // Finding the food item the reviews is going to be created at
  const item = await FoodItem.findById(req.params.id)
  // Inserting the review to the list of reviews of that specific food item
  item.reviews.push(req.body)
  // Saving changes in the database
  await item.save()
  // Redirecting the user to that specific food item page
  res.redirect(`/foodItems/${req.params.id}`)
}
