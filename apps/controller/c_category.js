const { getAllCategory, getCategoryById, postCategory, patchCategory, deletecategory } = require('../model/m_category')
const helper = require('../helper/my_helper')

module.exports = {
    getAllCategory: async (request, response) => {
        try {
            const result = await getAllCategory()
            return helper.response(response, 200, "Success Get category", result)
        } catch(error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getCategoryById: async (request, response) => {
        try {
            const { id } = request.params
            const result = await getCategoryById(id)

            if (result.length > 0) {
                return helper.response(response, 200, "Success Get category", result)
            } else {
                return helper.response(response, 404, `category by ID ${id} not found`, result)
            }
        } catch(error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    postCategory: async (request, response) => {
        try {
            const {category_name, category_status} = request.body
            const setData = {
                category_name,
                category_created_at: new Date(),
                category_status
            }
            const result = await postCategory(setData)
            return helper.response(response, 201, "category Created", result)
        } catch(e) {
            return helper.response(response, 400, "Bad Request", e)
        }

    },
    patchCategory: async (request, response) => {
        try {
            const { id } = request.params
            const { category_name, category_status } = request.body
            const setData = {
                category_name,
                category_updated_at: new Date(),
                category_status
            }
            const cekId = await getCategoryById(id)
            if (cekId.length > 0) {
                const result = await patchCategory(setData, id)
                return helper.response(response, 201, "category Updated", result)
            } else {
                return helper.response(response, 404, `category by ID ${id} not found`)
            }

        } catch(e) {
            console.log(id)
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    deletecategory: async (request, response) => {
        try {
            const { id } = request.params
            const cekId = getCategoryById(id)

            if (cekId.length > 0) {
                const result = await deletecategory(id)
                return helper.response(response, 201, "category Deleted", result)
            } else {
                return helper.response(response, 404, `category by ID ${id} not found`)
           }
       } catch(e) {
           return helper.response(response, 400, "Bad Request", error)
       }

   }
}
