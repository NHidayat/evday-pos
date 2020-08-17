const connection = require('../config/mysql')

module.exports = {
	getItemByHistory: (id) => {
		return new Promise((resolve, reject) => {
			connection.query('SELECT * FROM order_item WHERE history_id = ?', id, (error, result) => {
				!error ? resolve(result) : reject(new Error(error))
			})
		})
	},
	getAllHistory: () => {
		return new Promise((resolve,reject) => {
			connection.query('SELECT * FROM history', (error, result) => {
				!error ? resolve(result) : reject(new Error(error))
			})
		})
	},
	getHistoryById: (id, itemsData) => {
		return new Promise((resolve,reject) => {
			connection.query('SELECT * FROM history WHERE history_id = ?', id, (error, result) => {
				if (!error) {
					if (result.length > 0) {
						const { history_id, history_invoice, history_created_at, history_ppn, history_total } = result[0]
						newResult = [{
							history_id,
							history_invoice,
							history_created_at,
							items: itemsData,
							history_ppn,
							history_total
						}]
					} else {
						newResult = result
					}
					return resolve(newResult)
				} else {
					return reject(new new Error(error))
				}
			})
		})
	},
	postHistory: (setData, itemsData) => {
		return new Promise((resolve, reject) => {
			connection.query('INSERT INTO history SET ?', setData, (error, result) => {
				if (!error) {
					const insertId = result.insertId
					const { history_invoice, history_created_at, history_ppn, history_total } = setData
					const newResult = {
						history_id: result.insertId,
						...setData
					}
					resolve(newResult)
				} else {
					reject(new Error(error))
				}
			})
		})
	},
	postOrder: (setData) => {
		return new Promise((resolve, reject) => {
			connection.query('INSERT INTO order_item SET ?', setData, (error, result) => {
				!error ? resolve(result) : reject(new Error(error))
			})
		})
	}

}

const postOrderItem = (setData) => {
	return new Promise((resolve, reject) => {
		connection.query('INSERT INTO order_item SET ?', setData, (error, result) => {
			if (!error) {
				const newResult = {
					history_id: result.insertId,
					...setData
				}
				resolve(newResult)
			} else {
				reject(new Error(error))
			}
		})
	})
}