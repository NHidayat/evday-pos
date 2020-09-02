const router = require('express').Router()
const { getAllHistory, getHistoryById, postHistory } = require('../controller/c_history')
const { postHistory_v2 } = require('../controller/c_history_v2')
const { authorizationAdmin, authorizationAll } = require('../middleware/auth')
const { getHistoriesRedis, getHistoryByIdRedis } = require('../middleware/redis')

// GET
router.get('/', authorizationAdmin, getHistoriesRedis, getAllHistory)

// GET BY ID
router.get('/:id', authorizationAdmin, getHistoryByIdRedis, getHistoryById)

// POST
router.post('/', authorizationAll, postHistory)

// POST V2
router.post('/v2', authorizationAll, postHistory_v2)

module.exports = router