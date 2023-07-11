const express = require('express')
const router = express.Router()
const cartCtrl = require('../controllers/cart')
const cart = require('../models/cart')

// GET /cart
router.get('/cart', cartCtrl.index)

module.exports = router
