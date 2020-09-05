const helper = require('../helper/my_helper')
const { getProductById } = require('../model/m_product')

const cekId = async (request, response, next) => {
    const { id } = request.params
    const result = await getProductById(id)
    if (result.length < 1) {
        return helper.response(response, 404, `Product By Id ${id} Not Found`)
    } else {
    	next()
    }
}
module.exports = cekId