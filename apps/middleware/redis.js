const redis = require('redis')
const client = redis.createClient()
const helper = require('../helper/my_helper')

module.exports = {
	getProductRedis: (request, response, next) => {
		client.get(`getproduct:${JSON.stringify(request.query)}`,(error, result) => {
			if (!error && result !== null) {
				return helper.response(response, 200, `Success get product`, JSON.parse(result) )
			} else {
				next()
			}
		})
	},
	getProductByIdRedis: (request, response, next) => {
		const { id } = request.params
		client.get(`getproductbyid:${id}`,(error, result) => {
			if (!error && result !== null) {
				return helper.response(response, 200, `Success get product by id ${id}`, JSON.parse(result) )
			} else {
				next()
			}
		})
	},
	clearDataProductRedis:  (request, response, next) => {
		client.keys('getproduct*', (error, keys) => {
			keys.map(v => {
				client.del(v)
			})
		})
		next()
	},
	clearDataRedis:  (request, response, next) => {
		client.flushall((error, result) => {
			console.log(result)
		})
		next()
	},
	getHistoriesRedis: (request, response, next) => {
		client.get(`gethistories:${JSON.stringify(request.query)}`,(error, result) => {
			if (!error && result !== null) {
				console.log('data ada di dalam redis')
				return helper.response(response, 200, `Success get histories`, JSON.parse(result) )
			} else {
				console.log('data tidak ada di dalam redis')
				next()
			}
		})
	},
	getHistoryByIdRedis: (request, response, next) => {
		const { id } =  request.params
		client.get(`gethistorybyid:${id}`,(error, result) => {
			if (!error && result !== null) {
				console.log('data ada di dalam redis')
				return helper.response(response, 200, `Success get histories`, JSON.parse(result) )
			} else {
				console.log('data tidak ada di dalam redis')
				next()
			}
		})
	},
	clearDataHistoryRedis:  (request, response, next) => {
		client.keys('gethistor*', (error, keys) => {
			keys.map(v => {
				client.del(v)
			})
		})
		next()
	},
	getCategoriesRedis: (request, response, next) => {
		const { id } =  request.params
		client.get('getcategories',(error, result) => {
			if (!error && result !== null) {
				console.log('data ada di dalam redis')
				return helper.response(response, 200, `Success get categories`, JSON.parse(result) )
			} else {
				console.log('data tidak ada di dalam redis')
				next()
			}
		})
	},
	getCategoryByIdRedis: (request, response, next) => {
		const { id } =  request.params
		client.get(`getcategorybyid:${id}`,(error, result) => {
			if (!error && result !== null) {
				console.log('data ada di dalam redis')
				return helper.response(response, 200, `Success get category id ${id}`, JSON.parse(result) )
			} else {
				console.log('data tidak ada di dalam redis')
				next()
			}
		})
	},
	clearDataCategoryRedis:  (request, response, next) => {
		client.keys('getcategor*', (error, keys) => {
			keys.map(v => {
				client.del(v)
			})
		})
		next()
	},
}