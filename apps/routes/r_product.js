const router = require('express').Router()
const { getAllProduct, getProductById, getProductByName, postProduct, patchProduct, deleteProduct, getActiveProduct } = require('../controller/c_product')
const { authorizationAdmin, authorizationAll } = require('../middleware/auth')
const { getProductRedis, getProductByIdRedis, clearDataProductRedis } = require('../middleware/redis')
const uploadImage = require('../middleware/multer')

// GET
router.get('/', authorizationAdmin, getProductRedis, getAllProduct)

// GET BY ID
router.get('/:id', authorizationAdmin, getProductByIdRedis, getProductById)

// GET BY Name
router.get('/search/q', authorizationAll, getProductByName)

// GET Active Product
router.get('/active/beta', authorizationAll, getActiveProduct)

// POST
router.post('/', authorizationAdmin, clearDataProductRedis, uploadImage, postProduct)

// PATCH/PUT
router.patch('/:id', authorizationAdmin, clearDataProductRedis, patchProduct)

// DELETE
router.delete('/:id', authorizationAdmin, clearDataProductRedis, deleteProduct)

module.exports = router