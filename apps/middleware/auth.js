const jwt = require('jsonwebtoken')
const helper = require('../helper/my_helper')

module.exports = {
    authorizationAdmin: (request, response, next) => {
        console.log('authorization running')
        let token = request.headers.authorization
        if (token) {
            token = token.split(' ')[1]
            jwt.verify(token, 'RAHASIA', (error, result) => {
                if (
                    (error && error.name === 'JsonWebTokenError') ||
                    (error && error.name === 'TokenExpiredError')
                ) {
                    return helper.response(response, 403, error.message)
                } else {
                    console.log(result)
                    if (result.user_role !== 1) {
                        return helper.response(response, 403, "You don't have permission to access this feature")
                    } else {
                        request.token = result
                        next()
                    }
                }
            })
        } else {
            return helper.response(response, 403, "Token not found")
        }
    },
    authorizationAll: (request, response, next) => {
        console.log('authorization running')
        let token = request.headers.authorization
        if (token) {
            token = token.split(' ')[1]
            jwt.verify(token, 'RAHASIA', (error, result) => {
                if (
                    (error && error.name === 'JsonWebTokenError') ||
                    (error && error.name === 'TokenExpiredError')
                ) {
                    return helper.response(response, 403, error.message)
                } else {
                    console.log(result)
                    request.token = result
                    next()
                }
            })
        } else {
            return helper.response(response, 403, "Token not found")
        }
    }
}