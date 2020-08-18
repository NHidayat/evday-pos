const router = require('express').Router()
const { getAllHistory, getHistoryById, postHistory } = require('../controller/c_history')
const { postHistory_v2 } = require('../controller/c_history_v2')

// GET
router.get('/', getAllHistory)

// GET BY ID
router.get('/:id', getHistoryById)

// POST
router.post('/', postHistory)

// POST V2
router.post('/v2', postHistory_v2)

module.exports = router