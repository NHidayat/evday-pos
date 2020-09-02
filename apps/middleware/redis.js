const redis = require('redis')
const client = redis.createClient()
const helper = require('../helper/my_helper')

module.exports = {
	getProductByIdRedis: (request, response, next) => {
		const { id } = request.params
		client.get(`getproductbyid:${id}`,(error, result) => {
			if (!error && result !== null) {
				console.log('data ada di dalam redis')
				return helper.response(response, 200, `Success get product by id ${id}`, JSON.parse(result) )
			} else {
				console.log('data tidak ada di dalam redis')
				next()
			}
		})
	},
	clearDataProductRedis:  (request, response, next) => {
		client.flushall((error, result) => {
			console.log(result)
		})
		next()
	}
}