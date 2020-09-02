const router = require('express').Router()
const { getAllProduct, getProductById, getProductByName, postProduct, patchProduct, deleteProduct, getActiveProduct } = require('../controller/c_product')
const { authorizationAdmin, authorizationAll } = require('../middleware/auth')
const multer = require('multer')
const { getProductRedis, getProductByIdRedis, clearDataProductRedis } = require('../middleware/redis')

const storage = multer.diskStorage({
	destination: (request, file, callback) => {
		callback(null, './uploads/')
	},
	filename: (request, file, callback) => {
		console.log(file)
		callback(null, new Date().toISOString().replace(/:/g, '-') + "-" + file.originalname)

	}
})

let upload = multer({ storage: storage })

// GET
router.get('/', authorizationAdmin, getProductRedis, getAllProduct)

// GET BY ID
router.get('/:id', authorizationAdmin, getProductByIdRedis, getProductById)

// GET BY Name
router.get('/search/q', authorizationAll, getProductByName)

// GET Active Product
router.get('/active/beta', authorizationAll, getActiveProduct)

// POST
router.post('/', authorizationAdmin, upload.single('product_image'), postProduct)

// PATCH/PUT
router.patch('/:id', authorizationAdmin, clearDataProductRedis, patchProduct)

// DELETE
router.delete('/:id', authorizationAdmin, clearDataProductRedis, deleteProduct)

module.exports = router