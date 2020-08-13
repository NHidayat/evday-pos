const router = require('express').Router()
const {getAllProduct, getProductById, getProductByName,  postProduct, patchProduct, deleteProduct} = require('../controller/c_product')

// GET
// router.get('/', getAllProduct)

// GET BY ID
router.get('/:id', getProductById)

// GET BY Name
router.get('/search/:product_name', getProductByName)

// POST
router.post('/', postProduct)

// PATCH/PUT
router.patch('/:id', patchProduct)

// DELETE
router.delete('/:id', deleteProduct)

module.exports = router