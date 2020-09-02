const jwt = require('jsonwebtoken')
const helper = require('../helper/my_helper')

module.exports = {
    authorization: (request, response, next) => {
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
            // statement
        }
    }
}