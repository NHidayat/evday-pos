const bcrypt = require('bcrypt')
const helper = require('../helper/my_helper')
const jwt = require('jsonwebtoken')
const { postUser, cekUser, getUserById, patchUser } = require('../model/m_users')

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
            const checkUserData = await cekUser(user_email)
            if (checkUserData.length > 0) {
                return helper.response(response, 403, 'This email already rigistered ')
            } else {
                const result = await postUser(setData)
                return helper.response(response, 200, 'Success Register User', result)
            }
        } catch (e) {
            return helper.response(response, 400, 'Bad Request', e)
        }
    },
    loginUser: async (request, response) => {
        try {
            const { user_email, user_password } = request.body
            const checkUserData = await cekUser(user_email)

            if (checkUserData.length >= 1) {
                console.log(true)
                if (checkUserData[0].user_status !== 1) {
                    return helper.response(response, 403, "Your account is not active, please contact the admin")
                } else {
                    const checkPassword = bcrypt.compareSync(user_password, checkUserData[0].user_password)

                    if (checkPassword) {
                        const { user_id, user_email, user_password, user_name, user_role, user_status } = checkUserData[0]

                        let payload = {
                            user_id,
                            user_email,
                            user_role,
                            user_status
                        }
                        const token = jwt.sign(payload, 'RAHASIA', { expiresIn: 3600 * 24 })
                        payload = { ...payload, token }
                        return helper.response(response, 200, 'Success Login', payload)
                    } else {
                        return helper.response(response, 400, 'Wrong Password')
                    }
                }

            } else {
                return helper.response(response, 400, 'Email not Registed')
            }
        } catch (e) {
            return helper.response(response, 400, 'Bad Request')
        }
    },
    patchUser: async (request, response) => {
        const { id } = request.params
        const { user_name, user_password, user_status } = request.body
        const salt = bcrypt.genSaltSync(10)
        const encryptPassword = bcrypt.hashSync(user_password, salt)
        try {
            const cekId = await getUserById(id)
            console.log(cekId.length)
            if (cekId.length > 0) {
                const setData = {
                    user_name,
                    user_password: encryptPassword,
                    user_status
                }
                const result = await patchUser(setData, id)
                return helper.response(response, 200, 'Success Patch User', result)
            } else {
                return helper.response(response, 404, `User with ID ${id} not found`)
            }
        } catch (e) {
            return helper.response(response, 400, 'Bad Request', e)
        }
    }
}