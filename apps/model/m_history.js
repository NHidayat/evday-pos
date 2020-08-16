const connection = require('../config/mysql')

module.exports = {
	getItemByHistory: (id) => {
		return new Promise((resolve, reject) => {
			connection.query('SELECT * FROM order_item WHERE history_id = ?', id, (error, result) => {
				!error ? resolve(result) : reject(new Eror(error))
			})
		})
	},
	getAllHistory: () => {
		return new Promise((resolve,reject) => {
			connection.query('SELECT * FROM history', (error, result) => {
				!error ? resolve(result) : reject(new Eror(error))
			})
		})
	},
	getHistoryById: (id, cartItem) => {
		return new Promise((resolve,reject) => {
			connection.query('SELECT * FROM history WHERE history_id = ?', id, (error, result) => {
			// connection.query('SELECT * FROM history h JOIN order_item o ON (h.history_id = o.history_id) WHERE h.history_id = ?', id, (error, result) => {
				if (!error) {
					if (result.length > 0) {
						result[0].items = cartItem
					} else {
						result = result
					}
					return resolve(result)
				} else {
					return reject(new new Error(error))
				}
			})
		})
	},
	getHistoryCount: () => {
		return new Promise((resolve, reject) => {
			connection.query('SELECT COUNT(*) AS total FROM history', (error, result) => {
				!error ? resolve(result[0].total) : reject(new Eror(error))
			})
		})
	},
}