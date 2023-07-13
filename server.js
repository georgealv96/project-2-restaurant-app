const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
// session middleware
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')
const MongoStore = require('connect-mongo')

require('dotenv').config()
// connect to the MongoDB with mongoose
require('./config/database')
// configure Passport
require('./config/passport')

// mount all routes with appropriate base paths
const indexRouter = require('./routes/index')
const foodItemsRouter = require('./routes/foodItems')
const reviewsRouter = require('./routes/reviews')
const cartRouter = require('./routes/cart')

// create the Express app
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(methodOverride('_method'))

// mount the session middleware
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE_URL
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
)

app.use(passport.initialize())
app.use(passport.session())

// Add this middleware BELOW passport middleware
app.use(function (req, res, next) {
  res.locals.user = req.user // assinging a property to res.locals, makes that said property (user) availiable in every
  // single ejs view
  next()
})

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/foodItems', foodItemsRouter)
app.use('/', reviewsRouter)
app.use('/', cartRouter)

// invalid request, send 404 page
app.use(function (req, res) {
  res.status(404).send('Cant find that!')
})

module.exports = app
