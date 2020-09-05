const router = require('express').Router()
const { registerUser, loginUser, patchUser } = require('../controller/c_users')
const { authorizationAdmin } = require('../middleware/auth')

router.post('/register', registerUser)
router.get('/login', loginUser)
router.patch('/edit/:id', authorizationAdmin, patchUser)

module.exports = router