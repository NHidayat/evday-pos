const router = require('express').Router()
const { getAllCategory, getCategoryById, postCategory, patchCategory } = require('../controller/c_category')
const { authorizationAdmin, authorizationAll } = require('../middleware/auth')
const { getCategoriesRedis, getCategoryByIdRedis, clearDataRedis } = require('../middleware/redis')

// GET
router.get('/', authorizationAll, getCategoriesRedis, getAllCategory)

// GET BY ID
router.get('/:id', authorizationAll, getCategoryByIdRedis, getCategoryById)

// POST
router.post('/', authorizationAdmin, clearDataRedis, postCategory)

// PATCH/PUT
router.patch('/:id', authorizationAdmin, clearDataRedis, patchCategory)

// // DELETE
// router.delete('/:id', deleteCategory)

module.exports = router