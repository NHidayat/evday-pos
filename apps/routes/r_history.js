const router = require('express').Router()
const { getAllHistory, getHistoriesIncome, getHistoryById, postHistory } = require('../controller/c_history')
const { postHistory_v2 } = require('../controller/c_history_v2')
const { authorizationAdmin, authorizationAll } = require('../middleware/auth')
const { getHistoriesRedis, getHistoryIncomeRedis, getHistoryByIdRedis, clearDataHistoryRedis } = require('../middleware/redis')

// GET
router.get('/', authorizationAdmin, getHistoriesRedis, getAllHistory)

// GET BY ID
router.get('/:id', authorizationAdmin, getHistoryByIdRedis, getHistoryById)

// 
router.get('/histories-income/alpha', authorizationAdmin, getHistoryIncomeRedis, getHistoriesIncome)
// POST
router.post('/', authorizationAll, clearDataHistoryRedis, postHistory)

// POST V2
router.post('/v2', authorizationAll, clearDataHistoryRedis, postHistory_v2)

module.exports = router