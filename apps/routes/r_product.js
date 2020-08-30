const router = require('express').Router()
const { getAllProduct, getProductById, getProductByName, postProduct, patchProduct, deleteProduct, getActiveProduct } = require('../controller/c_product')

// GET
router.get('/', getAllProduct)

// GET BY ID
router.get('/:id', getProductById)

// GET BY Name
router.get('/search/q', getProductByName)

// GET Active Product
router.get('/active/beta', getActiveProduct)

// POST
router.post('/', postProduct)

// PATCH/PUT
router.patch('/:id', patchProduct)

// DELETE
router.delete('/:id', deleteProduct)

module.exports = router