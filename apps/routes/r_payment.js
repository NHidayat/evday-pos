const router = require('express').Router()

const { postPaymnet } = require('../controller/c_payment')
router.post('/', postPaymnet)
// router.post('/midtrans',)

module.exports = router