const bcrypt = require('bcrypt')
const helper = require('../helper/my_helper')
const jwt = require('jsonwebtoken')
const { postUser, cekUser } = require('../model/m_users')

module.exports = {
    registerUser: async (request, response) => {
        const { user_email, user_password, user_name } = request.body
        const salt = bcrypt.genSaltSync(10)
        const encryptPassword = bcrypt.hashSync(user_password, salt)

        const setData = {
            user_email,
            user_password: encryptPassword,
            user_name,
            user_role: 2,
            user_status: 0,
            user_created_at: new Date()
        }

        try {
            const result = await postUser(setData)
            return helper.response(response, 200, 'Success Register User', result)
        } catch (e) {
            return helper.response(response, 400, 'Bad Request')
        }
    },
    loginUser: async (request, response) => {
        try {
            const { user_email, user_password } = request.body
            const checkkUserData = await cekUser(user_email)

            if (checkkUserData.length >= 1) {
                console.log(true)
                const checkPassword = bcrypt.compareSync(user_password, checkkUserData[0].user_password)

                if (checkPassword) {
                	const { user_id, user_email, user_password, user_name, user_role, user_status } = checkkUserData[0]
                	
                	let payload = {
                		user_id,
                		user_email,
                		user_role,
                		user_status
                	}
                	const token = jwt.sign(payload, 'RAHASIA', { expiresIn : 3600 * 24 })
                	payload = { ...payload, token }
                    return helper.response(response, 200, 'Success Login', payload)
                } else {
                    return helper.response(response, 400, 'Wrong Password')
                }
            } else {
                return helper.response(response, 400, 'Email not Registed')
            }
        } catch (e) {
            return helper.response(response, 400, 'Bad Request')
        }
    }
}