const router = require('express').Router()
const { getAllCategory, getCategoryById, postCategory, patchCategory } = require('../controller/c_category')
const { authorizationAdmin, authorizationAll } = require('../middleware/auth')

// GET
router.get('/', authorizationAll, getAllCategory)

// GET BY ID
router.get('/:id', authorizationAll, getCategoryById)

// POST
router.post('/', authorizationAdmin, postCategory)

// PATCH/PUT
router.patch('/:id', authorizationAdmin, patchCategory)

// // DELETE
// router.delete('/:id', deleteCategory)

module.exports = router