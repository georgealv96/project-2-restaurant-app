const router = require('express').Router()
const passport = require('passport')

// The root route renders our only view
router.get('/', function (req, res) {
  res.render('index')
})

// Google OAuth login route
router.get(
  '/auth/google',
  passport.authenticate(
    'google',
    { scope: ['profile', 'email'], prompt: 'select_account' } // prompt is optional
  )
)

// Google OAuth callback route
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/', // Where you want the client to go when login was successful
    failureRedirect: '/' // Where you want the client to go if it fails
  })
)

// OAuth logout route
router.get('/logout', function (req, res) {
  req.logout(function () {
    //< - req.logout comes from passport, and what it does is destorys the cookie keeping track of the user!
    res.redirect('/') // <---- UPDATE THIS TO WHERE YOU WANT THE USER TO GO AFTER LOGOUT
  })
})

module.exports = router
