const { getAllCategory, getCategoryById, postCategory, patchCategory, deleteCategory } = require('../model/m_category')
const helper = require('../helper/my_helper')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
    getAllCategory: async (request, response) => {
        try {
            const result = await getAllCategory()
            client.set('getcategories', JSON.stringify(result))
            return helper.response(response, 200, "Success Get category", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getCategoryById: async (request, response) => {
        try {
            const { id } = request.params
            const result = await getCategoryById(id)

            if (result.length > 0) {
                client.set(`getcategorybyid:${id}`, JSON.stringify(result))
                return helper.response(response, 200, "Success Get category", result)
            } else {
                return helper.response(response, 404, `category by ID ${id} not found`, result)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    postCategory: async (request, response) => {
        const { category_name, category_status } = request.body
        const setData = {
            category_name,
            category_created_at: new Date(),
            category_status
        }
        if (category_name == undefined || category_name == '' || category_status == undefined || category_status == '') {
            return helper.response(response, 400, "Form data must be complete, dude ", null)
        }
        try {
            const result = await postCategory(setData)
            return helper.response(response, 201, "category Created", result)
        } catch (e) {
            return helper.response(response, 400, "Bad Request", e)
        }

    },
    patchCategory: async (request, response) => {
        const { id } = request.params
        const { category_name, category_status } = request.body
        if (category_name == undefined || category_name == '' || category_status == undefined || category_status == '') {
            return helper.response(response, 400, "Form data must be complete, dude ", null)
        }
        try {
            const setData = {
                category_name,
                category_updated_at: new Date(),
                category_status
            }
            const cekId = await getCategoryById(id)
            if (cekId.length > 0) {
                const result = await patchCategory(setData, id)
                return helper.response(response, 201, "category updated", result)
            } else {
                return helper.response(response, 404, `category by ID ${id} not found`)
            }

        } catch (e) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    deleteCategory: async (request, response) => {
        try {
            const { id } = request.params
            const cekId = await getCategoryById(id)

            if (cekId.length > 0) {
                const result = await deleteCategory(id)
                return helper.response(response, 201, "category Deleted", result)
            } else {
                return helper.response(response, 404, `category by ID ${id} not found`)
            }
        } catch (e) {
            return helper.response(response, 400, "Bad Request", error)
        }

    }
}