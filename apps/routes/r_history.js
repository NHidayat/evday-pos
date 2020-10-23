const router = require('express').Router()
const { getAllHistory, getHistoriesIncome, getHistoryById, postHistory, sendEmail } = require('../controller/c_history')
const { authorizationAdmin, authorizationAll } = require('../middleware/auth')
const { getHistoriesRedis, getHistoryIncomeRedis, getHistoryByIdRedis, clearDataHistoryRedis } = require('../middleware/redis')

router.get('/', authorizationAll, getHistoriesRedis, getAllHistory)
router.get('/:id', authorizationAll, getHistoryByIdRedis, getHistoryById)
router.get('/histories-income/alpha', authorizationAll, getHistoryIncomeRedis, getHistoriesIncome)
router.post('/', authorizationAll, clearDataHistoryRedis, postHistory)
router.post('/send-email', authorizationAll, sendEmail)



module.exports = router