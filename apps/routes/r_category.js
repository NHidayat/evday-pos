const router = require('express').Router()
const { getAllCategory, getCategoryById, postCategory, patchCategory, deleteCategory } = require('../controller/c_category')
const { authorizationAdmin, authorizationAll } = require('../middleware/auth')
const { getCategoriesRedis, getCategoryByIdRedis, clearDataCategoryRedis } = require('../middleware/redis')

// GET
router.get('/', authorizationAll, getCategoriesRedis, getAllCategory)

// GET BY ID
router.get('/:id', authorizationAll, getCategoryByIdRedis, getCategoryById)

// POST
router.post('/', authorizationAdmin, clearDataCategoryRedis, postCategory)

// PATCH/PUT
router.patch('/:id', authorizationAdmin, clearDataCategoryRedis, patchCategory)

// // DELETE
router.delete('/:id', authorizationAdmin, clearDataCategoryRedis, deleteCategory)

module.exports = router