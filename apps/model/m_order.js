const connection = require('../config/mysql')

module.exports = {
	postOrderItem: (historyData, itemsData) => {
		return new Promise((resolve, reject) => {

			const setData = itemsData.map(v => {
				const setItemData = {
					history_id: historyData.history_id,
					product_id: v.product_id,
					product_name: v.product_name,
					qty: v.qty,
					subtotal: v.subtotal,
				}
				connection.query('INSERT INTO order_item SET ?', setItemData, (error, result) => {
					if (!error) {
						const { history_id, history_invoice, history_created_at, history_ppn, history_total, cashier_name } = historyData
						const newResult = {
							history_id,
							history_invoice,
							history_created_at,
							items: itemsData,
							cashier_name,
							history_ppn,
							history_total
						}
						resolve(newResult)

					} else {
						reject(new Error(error))
					}
				})

			})
		})
	}
}