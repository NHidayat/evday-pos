const router = require('express').Router()
const { getAllHistory, getHistoriesIncome, getHistoryById, postHistory, sendEmail } = require('../controller/c_history')
const { authorizationAdmin, authorizationAll } = require('../middleware/auth')
const { getHistoriesRedis, getHistoryIncomeRedis, getHistoryByIdRedis, clearDataHistoryRedis } = require('../middleware/redis')

router.get('/', authorizationAdmin, getHistoriesRedis, getAllHistory)
router.get('/:id', authorizationAdmin, getHistoryByIdRedis, getHistoryById)
router.get('/histories-income/alpha', authorizationAdmin, getHistoryIncomeRedis, getHistoriesIncome)
router.post('/', authorizationAll, clearDataHistoryRedis, postHistory)
router.post('/send-email', authorizationAll, sendEmail)



module.exports = router