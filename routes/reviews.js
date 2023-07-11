const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controllers/reviews')

// POST /foodItems/:id/reviews
router.post('/foodItems/:id/reviews', reviewsCtrl.create)

// DELETE /reviews/:id
router.delete('/reviews/:id', reviewsCtrl.delete)

module.exports = router
