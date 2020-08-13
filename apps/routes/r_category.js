const router = require('express').Router()
const { getAllCategory, getCategoryById, postCategory, patchCategory } = require('../controller/c_category')

// GET
router.get('/', getAllCategory)

// GET BY ID
router.get('/:id', getCategoryById)

// POST
router.post('/', postCategory)

// PATCH/PUT
router.patch('/:id', patchCategory)

// // DELETE
// router.delete('/:id', deleteCategory)

module.exports = router