const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../models/user')

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
        let userDocument = await User.findOne({ googleId: profile.id })
        if (userDocument) return cb(null, userDocument)
        userDocument = await User.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value
        })
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
