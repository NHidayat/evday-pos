const router = require('express').Router()
const { getAllHistory, getHistoryById } = require('../controller/c_History')

// GET
router.get('/', getAllHistory)

// GET BY ID
router.get('/:id', getHistoryById)

// // POST
// router.post('/', postHistory)

// // PATCH/PUT
// router.patch('/:id', patchHistory)

// // DELETE
// router.delete('/:id', deleteHistory)

module.exports = router