const express = require('express')
const router = express.Router()
const cartCtrl = require('../controllers/carts')

// GET /cart
router.get('/cart', cartCtrl.index)

// DELETE /in-cart-items/:id
router.delete('/in-cart-items/:id', cartCtrl.delete) //!!!?

module.exports = router
