const route = require('express').Router()

// import routes
const product = require('./routes/r_product')
const category = require('./routes/r_category')

// buat middle 
route.use('/product', product)
route.use('/category', category)

module.exports = route