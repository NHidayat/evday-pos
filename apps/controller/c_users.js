const bcrypt = require('bcrypt')
const helper = require('../helper/my_helper')
const jwt = require('jsonwebtoken')
const { getUsers, postUser, cekUser, getUserById, patchUser, getUserByKey } = require('../model/m_users')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
    getUsers: async (request, response) => {
        try {
            const result = await getUsers()
            client.set(`getusers`, JSON.stringify(result))
            return helper.response(response, 200, 'Success get all users', result)

        } catch (e) {
            return helper.response(response, 400, 'Bad request', e)
        }
    },
    getUserById: async (request, response) => {
        const { id } = request.params
        try {
            const result = await getUserById(id)
            if (result.length > 0) {
                client.set(`getuser:${id}`, JSON.stringify(result))
                return helper.response(response, 200, `Success get user by id ${id}`, result)
            } else {
                return helper.response(response, 404, `User by id ${id} not found!`, result)
            }

        } catch (e) {
            return helper.response(response, 400, 'Bad request', e)
        }
    },
    registerUser: async (request, response) => {
        const nodemailer = require("nodemailer")
        const { user_email, user_password, user_name } = request.body
        const salt = bcrypt.genSaltSync(10)
        const encryptPassword = bcrypt.hashSync(user_password, salt)
        const user_key = Math.round(Math.random() * 99999)

        const email_validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const password_validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
        const setData = {
            user_email,
            user_password: encryptPassword,
            user_name,
            user_role: 2,
            user_status: 0,
            user_key,
            user_created_at: new Date()
        }
        if (email_validation.test(user_email) == false) {
            return helper.response(response, 403, 'Your email is not valid')
        }

        try {
            const checkUserData = await cekUser(user_email)
            if (checkUserData.length > 0) {
                return helper.response(response, 403, 'This email already rigistered ')

            } else if (!user_password.match(password_validation)) {
                return helper.response(response, 403, 'Password must be between 6 to 20 characters. Contain at least one numeric digit, one uppercase and one lowercase letter')
            } else {

                const result = await postUser(setData)
                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true,
                    auth: {
                        user: process.env.USER_EMAIL,
                        pass: process.env.PASS_EMAIL
                    },
                });

                let email_body = `
                <div class="my-container" style="
                padding: 20px 10px;
                background: aliceblue;
                ">
                    <div class="wrapper"
                    style="background: #fff;
                    max-width: 768px;
                    margin: 10px auto
                    ">
                        <div class="header"
                         style="
                         background: #2d2d2d;
                         color: #fff;
                         font-size: 20px;
                         padding: 20px;">
                            <span class="title">Activation Code</span>
                        </div>
                        <div class="wrapper-body" style="
                        padding: 20px;
                        ">
                        <span>Hello, ${user_name}</span>
                        <p>You have registered as a user on Evday-POS. Please enter the OTP code below to activate your account.</p>
                        <div class="otp-code" style="
                        background: aliceblue;
                        width: 80px;
                        padding: 10px;
                        text-align: center;
                        border-radius: 5px;
                        font-size: 20px;
                        margin: 20px auto;
                        font-weight: bolder;
                        ">
                        <span>${user_key}</span>
                    </div>
                    <span>Thank you for using our service.</span>
                </div>
                <div class="wrapper-footer" style="
                background: #57cad5;
                color: #fff;
                padding: 20px;
                ">
                    <span class="title">Evday POS</span>
                </div>
                `

                let info = await transporter.sendMail({
                    from: `"Cemol Dev 👻" <${process.env.USER_EMAIL}>`,
                    to: user_email,
                    subject: "Registration Confirmation",
                    html: email_body
                });
                return helper.response(response, 200, 'Email has been send! Pelase check your email for activate your account', result)
            }
        } catch (e) {
            console.log(e)
            return helper.response(response, 400, 'Bad Request', e)
        }
    },
    activationUser: async (request, response) => {
        try {
            const { user_key } = request.body
            const checkKey = await getUserByKey(user_key)
            if (checkKey.length < 1) {
                return helper.response(response, 404, 'Key is not found :(')
            } else {
                const id = checkKey[0].user_id
                const result = await patchUser({ user_key: '', user_status: 1 }, id)
                return helper.response(response, 200, 'Conratulation! your registartion is success', helper) 
            }
        } catch(e) {
            console.log(e)
            return helper.response(response, 400, 'Bad Request', e)
        }
    },
    loginUser: async (request, response) => {
        try {
            const { user_email, user_password } = request.body
            const checkUserData = await cekUser(user_email)

            if (checkUserData.length >= 1) {
                if (checkUserData[0].user_status !== 1) {
                    return helper.response(response, 403, "Your account is not active, please contact the admin")
                } else {
                    const checkPassword = bcrypt.compareSync(user_password, checkUserData[0].user_password)

                    if (checkPassword) {
                        const { user_id, user_email, user_password, user_name, user_role, user_status } = checkUserData[0]

                        let payload = {
                            user_id,
                            user_email,
                            user_name,
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
                return helper.response(response, 400, 'Email not Registered')
            }
        } catch (e) {
            return helper.response(response, 400, 'Bad Request')
        }
    },
    patchUser: async (request, response) => {
        const { id } = request.params
        const { user_name, user_status } = request.body
        if (
            user_name == undefined || user_name == '' ||
            user_status == undefined || user_status == ''
        ) {
            return helper.response(response, 403, 'Data must be complete')
        }
        try {
            const cekId = await getUserById(id)
            if (cekId.length > 0) {
                const setData = {
                    user_name,
                    user_status
                }
                const result = await patchUser(setData, id)
                return helper.response(response, 200, 'Success Patch User', result)
            } else {
                return helper.response(response, 404, `User with ID ${id} not found`)
            }
        } catch (e) {
            console.log(e)
            return helper.response(response, 400, 'Bad Request', e)
        }
    }
}