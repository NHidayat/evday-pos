const { getAllHistory, getHistoryById, getItemByHistory, postHistory, postOrder } = require('../model/m_history')
const { postOrderItem } = require('../model/m_order')
const helper = require('../helper/my_helper')

module.exports = {
    getAllHistory: async (request, response) => {
        try {
            const result = await getAllHistory()
            return helper.response(response, 200, "Success Get Histories", result)
        } catch(error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getHistoryById: async (request, response) => {
        try {
            const { id } = request.params
            const cartResult = await getItemByHistory(id)
            const result = await getHistoryById(id, cartResult)

            if (result.length > 0) {
                return helper.response(response, 200, `Success Get History by ID ${id}`, result)
            } else {
                return helper.response(response, 404, `History by ID ${id} not found`, result)
            }
        } catch(error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    postHistory: async (request, response) => {
        try {
            const itemsData = request.body.items
            const history_invoice = new Date().getTime()
            const itemsTotal = itemsData.map(item => item.subtotal).reduce((a, b) => a + b)
            const history_ppn = (0.1 * itemsTotal)
            const history_total = itemsTotal + history_ppn
            const invoiceData = {
                history_invoice,
                history_ppn,
                history_total,
                history_created_at: new Date()
            }
            const insertHistory = await postHistory(invoiceData, itemsData)
            const result = await postOrderItem(insertHistory,itemsData)
            return helper.response(response, 200, "Success Post History", result)
        } catch(error) {
         return helper.response(response, 400, "Bad Request", error)
     }
 }
}
