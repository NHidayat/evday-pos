const {getAllProduct, getProductById, postProduct, patchProduct, deleteProduct} = require('../model/m_product')
const helper = require('../helper/my_helper')

module.exports = {
    getAllProduct: async (request, response) => {
        try {
            const result = await getAllProduct()
            return helper.response(response, 200, "Success Get Product", result)
        } catch(error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getProductById: async (request, response) => {
        try {
            const { id } = request.params
            const result = await getProductById(id)
            
            if (result.length > 0) {
                return helper.response(response, 200, "Success Get Product", result)
            } else {
                return helper.response(response, 404, `Product By Id ${id} not Found`, result)
            }
        } catch(error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    postProduct: async (request, response) => {
        try {
            const {product_name, product_image, product_price, category_id, product_status} = request.body
            const setData = {
                product_name,
                product_image,
                product_price,
                category_id,
                product_created_at: new Date(),
                product_status
            }
            const result = await postProduct(setData)
            console.log(result)
            return helper.response(response, 201, "Product Created", result)
        } catch(e) {
            return helper.response(response, 400, "Bad Request", e)
        }

    },
    patchProduct: async (request, response) => {
        try {
            const { id } = request.params
            const { product_name, product_image, product_price, category_id, product_status } = request.body
            const setData = {
                product_name,
                product_image,
                product_price,
                category_id,
                product_updated_at: new Date(),
                product_status
            }
            const cekId = await getProductById(id)
            if (cekId.length > 0) {
                const result = await patchProduct(setData, id)
                return helper.response(response, 201, "Product Updated", result)
            } else {
                return helper.response(response, 404, `Product By Id ${id} not Found`)
            }

        } catch(e) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    deleteProduct: async (request, response) => {
        try {
            const { id } = request.params
            const cekId = await getProductById(id)
            if (cekId.length > 0) {
                const result = await deleteProduct(id)
                return helper.response(response, 201, "Product Deleted", result)
            } else {
                return helper.response(response, 404, `Product By Id ${id} not Found`)
            }
        } catch(e) {
            return helper.response(response, 400, "Bad Request", error)
        }

    }
}