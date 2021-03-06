const connection = require('../config/mysql')

module.exports = {
	getProduct: (order, limit, offset) => {
		return new Promise((resolve, reject) => {
			connection.query(`SELECT * FROM product p INNER JOIN category c ON p.category_id = c.category_id ORDER BY ${order} LIMIT ${limit} OFFSET ${offset}`, (error, result) => {
				!error ? resolve(result) : reject(new Error(error))
			})
		})
	},
	getActiveProduct: (order, limit, offset) => {
		return new Promise((resolve, reject) => {
			connection.query(`SELECT * FROM product p INNER JOIN category c ON p.category_id = c.category_id Where product_status = 1 ORDER BY ${order} LIMIT ${limit} OFFSET ${offset}`, (error, result) => {
				!error ? resolve(result) : reject(new Error(error))
			})
		})
	},
	getProductCount: () => {
		return new Promise((resolve, reject) => {
			connection.query('SELECT COUNT(*) AS total FROM product', (error, result) => {
				!error ? resolve(result[0].total) : reject(new Error(error))
			})
		})
	},
	getProductActiveCount: () => {
		return new Promise((resolve, reject) => {
			connection.query('SELECT COUNT(*) AS total FROM product WHERE product_status = 1', (error, result) => {
				!error ? resolve(result[0].total) : reject(new Error(error))
			})
		})
	},
	getProductById: (id) => {
		return new Promise((resolve, reject) => {
			connection.query('SELECT * FROM product WHERE product_id = ?', id, (error, result) => {
				!error ? resolve(result) : reject(new Error(error))
			})
		})
	},
	getProductByName: (product_name) => {
		return new Promise((resolve, reject) => {
			connection.query(`SELECT * FROM product WHERE product_name LIKE '%${product_name}%'`, (error, result) => {
				!error ? resolve(result) : reject(new Error(error))
			})
		})
	},
	getActiveProductByName: (product_name) => {
		return new Promise((resolve, reject) => {
			connection.query(`SELECT * FROM product WHERE product_name LIKE '%${product_name}%' AND product_status = 1`, (error, result) => {
				!error ? resolve(result) : reject(new Error(error))
			})
		})
	},
	postProduct: (setData) => {
		return new Promise((resolve, reject) => {
			connection.query('INSERT INTO product SET ?', setData, (error, result) => {
				if (!error) {
					const newResult = {
						product_id: result.insertId,
						...setData
					}
					resolve(newResult)
				} else {
					reject(new Error(error))
				}
			})
		})
	},
	patchProduct: (setData, id) => {
		return new Promise((resolve, reject) => {
			connection.query('UPDATE product SET ? WHERE product_id = ?', [setData, id], (error, result) => {
				if (!error) {
					const newResult = {
						product_id: id,
						...setData
					}
					resolve(newResult)
				} else {
					reject(new Error(error))
				}
			})
		})
	},
	deleteProduct: (id) => {
		return new Promise((resolve, reject) => {
			connection.query('DELETE FROM product WHERE product_id = ?', id, (error, result) => {
				if (!error) {
					const newResult = {
						id: id
					}
					resolve(newResult)
				} else {
					reject(new Error(error))
				}
			})
		})
	}
}