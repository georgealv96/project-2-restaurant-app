const express = require('express')
const router = express.Router()

const foodItemsCtrl = require('../controllers/foodItems')

// GET /foodItems
router.get('/', foodItemsCtrl.index)

module.exports = router
