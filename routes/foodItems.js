const express = require('express')
const router = express.Router()
const foodItemsCtrl = require('../controllers/foodItems')

// GET /foodItems
router.get('/', foodItemsCtrl.index)
// GET /foodItems/:id
router.get('/:id', foodItemsCtrl.show)

module.exports = router
