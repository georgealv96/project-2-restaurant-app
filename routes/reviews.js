const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controllers/reviews')

// POST /foodItems/:id/reviews
router.post('/foodItems/:id/reviews', reviewsCtrl.create)

// GET /reviews/:id
// router.get('/reviews/:id', reviewsCtrl.show)

module.exports = router
