const express = require('express')
const router = express.Router()
const cartCtrl = require('../controllers/carts')

// GET /cart
router.get('/cart', cartCtrl.index)

module.exports = router
