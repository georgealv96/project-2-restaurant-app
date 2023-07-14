const FoodItem = require('../models/foodItem')

module.exports = {
  create,
  delete: deleteReview
}

async function create(req, res) {
  try {
    // Finding the food item the reviews is going to be created at
    const foodItem = await FoodItem.findById(req.params.id)
    // Getting the user's object and name
    req.body.user = req.user._id
    req.body.userName = req.user.name
    // Inserting the review to the list of reviews of that specific food item
    foodItem.reviews.push(req.body)
    // Saving changes in the database
    await foodItem.save()
    // Redirecting the user to that specific food item page
    res.redirect(`/foodItems/${req.params.id}`)
  } catch (err) {
    res.send(err)
  }
}

async function deleteReview(req, res, next) {
  try {
    // Finding the food item with the review and the review
    const foodItem = await FoodItem.findOne({
      'reviews._id': req.params.id,
      'reviews.user': req.user._id
    })
    // If the food item wasn't found, redirect the user to the food list
    if (!foodItem) return res.redirect('/foodItems')
    // Removing the review and saving the changes to the database
    await foodItem.reviews.remove(req.params.id)
    await foodItem.save()
    // Redirecting the user to that specific food item page
    res.redirect(`/foodItems/${foodItem._id}`)
  } catch (err) {
    res.send(err)
  }
}
