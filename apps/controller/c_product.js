const { getProduct, getProductCount, getProductById, postProduct, patchProduct, deleteProduct, getProductByName } = require('../model/m_product')
const helper = require('../helper/my_helper')
const qs = require('querystring')

const getPrevLink = (page, currentQuery) => {
    if (page > 1) {
        const generatePage = { page: page - 1 }
        const resultNextLink = { ...currentQuery, ...generatePage }
        return qs.stringify(resultNextLink)
    } else {
        return null
    }
}

const getNextLink = (page, totalPage, currentQuery) => {
    if (page < totalPage) {
        const generatePage = { page: page + 1 }
        const resultPrevLink = { ...currentQuery, ...generatePage }
        return qs.stringify(resultPrevLink)
    } else {
        return null
    }
}

module.exports = {
    getAllProduct: async (request, response) => {
        let { page, limit, orderBy, sort } = request.query
        page = page == undefined ? 1 : parseInt(page)
        limit = limit == undefined ? 9 : parseInt(limit)
        orderBy = orderBy == undefined ? 'product_price' : orderBy
        sort = sort == undefined ? 'DESC' : sort

        const totalData = await getProductCount()
        const totalPage = Math.ceil(totalData / limit)
        let offset = page * limit - limit

        let prevLink = getPrevLink(page, request.query)
        let nextLink = getNextLink(page, totalPage, request.query)

        const pageInfo = {
            page, totalPage, limit, totalData, orderBy, sort,
            prevLink: prevLink && `http://127.0.0.1:3000/product?${prevLink}`,
            nextLink: nextLink && `http://127.0.0.1:3000/product?${nextLink}`
        }

        try {
            const result = await getProduct(orderBy, sort, limit, offset)
            return helper.response(response, 200, "Success Get Product", result, pageInfo)
        } catch (error) {
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
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getProductByName: async (request, response) => {
        try {
            const { product_name } = request.params
            const result = await getProductByName(product_name)
            if (result.length > 0) {
                return helper.response(response, 200, "Success Get Product by Name", result)
            } else {
                return helper.response(response, 404, `Product by name ${product_name} not found!`, result)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    postProduct: async (request, response) => {
        try {
            const { product_name, product_image, product_price, category_id, product_status } = request.body
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
        } catch (e) {
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

        } catch (e) {
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
        } catch (e) {
            return helper.response(response, 400, "Bad Request", error)
        }

    }
}