const router = require('express').Router()
const { getAllProduct, getProductById, getProductByName, postProduct, patchProduct, deleteProduct, getActiveProduct } = require('../controller/c_product')
const { authorization } = require('../middleware/auth')
const multer = require('multer')
const { getProductByIdRedis, clearDataProductRedis } = require('../middleware/redis')

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
router.get('/', authorization, getAllProduct)

// GET BY ID
router.get('/:id', getProductByIdRedis, getProductById)

// GET BY Name
router.get('/search/q', getProductByName)

// GET Active Product
router.get('/active/beta', getActiveProduct)

// POST
router.post('/', upload.single('product_image'), postProduct)

// PATCH/PUT
router.patch('/:id', clearDataProductRedis, patchProduct)

// DELETE
router.delete('/:id', clearDataProductRedis, deleteProduct)

module.exports = router