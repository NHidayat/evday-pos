const route = require('express').Router()

// import routes
const product = require('./routes/r_product')
const category = require('./routes/r_category')
const history = require('./routes/r_history')
const users = require('./routes/r_users')
const payment = require('./routes/r_payment')

// buat middle 
route.use('/product', product)
route.use('/category', category)
route.use('/history', history)
route.use('/users', users)
route.use('/payment', payment)

module.exports = route