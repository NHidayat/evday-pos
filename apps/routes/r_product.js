const router = require('express').Router()
const { getAllProduct, getProductById, getProductByName, postProduct, patchProduct, deleteProduct, getActiveProduct } = require('../controller/c_product')
const { authorizationAdmin, authorizationAll } = require('../middleware/auth')
const { getProductRedis, getProductByIdRedis, clearDataRedis } = require('../middleware/redis')
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
router.post('/', authorizationAdmin, clearDataRedis, uploadImage, postProduct)

// PATCH/PUT
router.patch('/:id', authorizationAdmin, clearDataRedis, patchProduct)

// DELETE
router.delete('/:id', authorizationAdmin, clearDataRedis, deleteProduct)

module.exports = router