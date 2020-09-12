const router = require('express').Router()
const { getAllProduct, getProductById, getProductByName, postProduct, patchProduct, deleteProduct, getActiveProduct } = require('../controller/c_product')
const { authorizationAdmin, authorizationAll } = require('../middleware/auth')
const { getProductRedis, getActiveProductRedis, getProductByIdRedis, clearDataProductRedis } = require('../middleware/redis')
const uploadImage = require('../middleware/multer')
const checkId = require('../middleware/checkProduct')

// GET
router.get('/', authorizationAdmin, getProductRedis, getAllProduct)

// GET BY ID
router.get('/:id', authorizationAdmin, getProductByIdRedis, getProductById)

// GET BY Name
router.get('/search/q', authorizationAll, getProductByName)

// GET Active Product
router.get('/active/beta', authorizationAll, getActiveProductRedis, getActiveProduct)

// POST
router.post('/', authorizationAdmin, clearDataProductRedis, uploadImage, postProduct)

// PATCH/PUT
router.patch('/:id', authorizationAdmin, clearDataProductRedis, checkId, uploadImage, patchProduct)

// DELETE
router.delete('/:id', authorizationAdmin, clearDataProductRedis, deleteProduct)

module.exports = router