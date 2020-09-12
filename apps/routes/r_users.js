const router = require('express').Router()
const { getUsers, getUserById, registerUser, loginUser, patchUser } = require('../controller/c_users')
const { authorizationAdmin } = require('../middleware/auth')
const { getUsersRedis, getUserByIdRedis, clearDataUsersRedis } = require('../middleware/redis')

router.get('/', authorizationAdmin, getUsersRedis, getUsers)
router.get('/:id', authorizationAdmin, getUserByIdRedis, getUserById)
router.post('/register', clearDataUsersRedis, registerUser)
router.post('/login', loginUser)
router.patch('/edit/:id', authorizationAdmin, clearDataUsersRedis, patchUser)

module.exports = router