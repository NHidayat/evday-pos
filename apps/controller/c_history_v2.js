const { getAllHistory, getHistoryById, getItemByHistory, postHistory, postOrder } = require('../model/m_history_v2')
const helper = require('../helper/my_helper')

module.exports = {
	postHistory_v2: async (request, response) => {
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
			const result = await postHistory(invoiceData, itemsData)            
			return helper.response(response, 200, "Success Post History", result)
		} catch(error) {
			return helper.response(response, 400, "Bad Request", error)
		}
	}
}
