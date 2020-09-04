const { getProduct, getProductCount, getProductById, postProduct, patchProduct, deleteProduct, getActiveProductByName, getActiveProduct } = require('../model/m_product')
const helper = require('../helper/my_helper')
const qs = require('querystring')
const redis = require('redis')
const client = redis.createClient()
const fs = require('fs')

module.exports = {
    getAllProduct: async (request, response) => {
        let { page, limit, orderBy } = request.query
        page = page == undefined ? 1 : parseInt(page)
        limit = limit == undefined ? 9 : parseInt(limit)
        orderBy = orderBy == undefined ? 'product_price ASC' : orderBy

        const totalData = await getProductCount()
        const totalPage = Math.ceil(totalData / limit)
        let offset = page * limit - limit

        let prevLink = helper.getPrevLink(page, request.query)
        let nextLink = helper.getNextLink(page, totalPage, request.query)

        const pageInfo = {
            page,
            totalPage,
            limit,
            totalData,
            orderBy,
            prevLink: prevLink && `http://127.0.0.1:3000/product?${prevLink}`,
            nextLink: nextLink && `http://127.0.0.1:3000/product?${nextLink}`
        }

        try {
            const result = await getProduct(orderBy, limit, offset)
            client.set(`getproduct:${JSON.stringify(request.query)}`, JSON.stringify(result))
            return helper.response(response, 200, "Success Get Product", result, pageInfo)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getActiveProduct: async (request, response) => {
        let { page, limit, orderBy } = request.query
        page = page == undefined ? 1 : parseInt(page)
        limit = limit == undefined ? 9 : parseInt(limit)
        orderBy = orderBy == undefined ? 'product_price ASC' : orderBy

        const totalData = await getProductCount()
        const totalPage = Math.ceil(totalData / limit)
        let offset = page * limit - limit

        let prevLink = helper.getPrevLink(page, request.query)
        let nextLink = helper.getNextLink(page, totalPage, request.query)

        const pageInfo = {
            page,
            totalPage,
            limit,
            totalData,
            orderBy,
            prevLink: prevLink && `http://127.0.0.1:3000/product?${prevLink}`,
            nextLink: nextLink && `http://127.0.0.1:3000/product?${nextLink}`
        }

        try {
            const result = await getActiveProduct(orderBy, limit, offset)
            return helper.response(response, 200, "Success Get Product", result, pageInfo)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getProductById: async (request, response) => {
        const { id } = request.params
        try {
            const result = await getProductById(id)
            if (result.length > 0) {
                // set data to redis
                client.setex(`getproductbyid:${id}`, 3600, JSON.stringify(result))
                return helper.response(response, 200, `Success get product by id ${id}`, result)
            } else {
                return helper.response(response, 404, `Product By Id ${id} not Found`, result)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getProductByName: async (request, response) => {
        const { product_name } = request.query
        const result = await getActiveProductByName(product_name)
        try {
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
        const { product_name, product_price, category_id, product_status } = request.body

        if (product_name == undefined || product_name == '' || product_price == undefined || product_price == '' || category_id == undefined || category_id == '' || product_status == undefined || product_status == '') {
            return helper.response(response, 400, "Form data must be complete, dude", 'cek again')
        }
        try {
            console.log(request.file)
            const setData = {
                product_name,
                product_image: request.file === undefined ? '' : request.file.filename,
                product_price,
                category_id,
                product_created_at: new Date(),
                product_status
            }
            // console.log(setData)
            const result = await postProduct(setData)
            return helper.response(response, 201, "Product Created", result)
        } catch (e) {
            return helper.response(response, 400, "Bad Request", e)
        }

    },
    patchProduct: async (request, response) => {
        const { id } = request.params
        const { product_name, product_image, product_price, category_id, product_status } = request.body

        if (product_name == undefined || product_name == '' || product_image == undefined || product_image == '' || product_price == undefined || product_price == '' || category_id == undefined || category_id == '' || product_status == undefined || product_status == '') {
            return helper.response(response, 400, "Form data must be complete, dude", null)
        }
        try {
            const cekId = await getProductById(id)
            if (cekId.length > 0) {
                const setData = {
                    product_name,
                    product_image,
                    product_price,
                    category_id,
                    product_updated_at: new Date(),
                    product_status
                }
                const result = await patchProduct(setData, id)
                return helper.response(response, 201, "Product Updated", result)
            } else {
                return helper.response(response, 404, `Product By Id ${id} not Found`)
            }
        } catch (e) {
            return helper.response(response, 400, "Bad Request", e)
        }
    },
    deleteProduct: async (request, response) => {
        const { id } = request.params
        try {
            const cekId = await getProductById(id)
            if (cekId.length > 0) {
                const result = await deleteProduct(id)
                const image = cekId[0].product_image
                fs.unlink(`./uploads/${image}`, function(err) {
                    if (err) throw err;
                    console.log('File deleted!');
                });
                return helper.response(response, 201, "Product Deleted", result)
            } else {
                return helper.response(response, 404, `Product By Id ${id} not Found`)
            }
        } catch (e) {
            return helper.response(response, 400, "Bad Request", e)
        }
    }
}