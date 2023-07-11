const express = require('express')
const router = express.Router()
const foodItemsCtrl = require('../controllers/foodItems')

// GET /foodItems
router.get('/', foodItemsCtrl.index)
// GET /foodItems/:id
router.get('/:id', foodItemsCtrl.show)
// PUT /foodItems/:id
router.put('/:id', foodItemsCtrl.edit)

module.exports = router
