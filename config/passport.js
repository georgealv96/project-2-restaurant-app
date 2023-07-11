const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../models/user')
const Cart = require('../models/cart')

// configuring Passport!
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        // Checking if the user exists in the database
        let userDocument = await User.findOne({ googleId: profile.id })
        // If the user exists, then pass it
        if (userDocument) return cb(null, userDocument)
        userDocument = await User.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value
        })
        // Checking if the cart exists in the database
        let cartDocument = await Cart.findOne({ user: userDocument._id })
        // If it does not, create a new one
        if (!cartDocument) {
          const cart = await Cart.create({
            user: userDocument._id,
            foodItems: []
          })
        }
        return cb(null, userDocument)
      } catch (err) {
        return cb(err)
      }
    }
  )
)

passport.serializeUser(function (user, cb) {
  cb(null, user.id)
})

passport.deserializeUser(async function (userId, cb) {
  const user = await User.findById(userId)
  cb(null, user)
})
