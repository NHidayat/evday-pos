const { getAllHistory, getHistoryById, getItemByHistory, getHistoryCount } = require('../model/m_history')
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
                return helper.response(response, 200, "Success Get History", result)
            } else {
                return helper.response(response, 404, `History by ID ${id} not found`, result)
            }
        } catch(error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    }
}
