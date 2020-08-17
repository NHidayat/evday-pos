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
	getHistoryById: (id, cartItem) => {
		return new Promise((resolve,reject) => {
			connection.query('SELECT * FROM history WHERE history_id = ?', id, (error, result) => {
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
	postHistory: (setData, itemsData) => {
		return new Promise((resolve, reject) => {
			connection.query('INSERT INTO history SET ?', setData, (error, result) => {
				if (!error) {
					const insertId = result.insertId
					const items = insertItems(itemsData, insertId)
					const { history_invoice, history_created_at, history_ppn, history_total } = setData
					const newResult = {
						history_id: result.insertId,
						history_invoice,
						history_created_at,
						items: itemsData,
						history_ppn,
						history_total
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

const insertItems = (itemsData, insertId) => {
	itemsData.map(v => {
		const setItemData = {
			history_id: insertId,
			product_id: v.product_id,
			product_name: v.product_name,
			qty: v.qty,
			subtotal: v.subtotal,
		}
		const proccess = postOrderItem(setItemData)
	})
}
