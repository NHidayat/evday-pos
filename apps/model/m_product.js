const connection = require('../config/mysql')

module.exports = {
	getAllProduct: () => {
		return new Promise((resolve,reject) => {
			connection.query('SELECT * FROM product', (error, result) => {
				!error ? resolve(result) : reject(new Eror(error))
			})
		})
	},
	getProductById: (id) => {
		return new Promise((resolve,reject) => {
			connection.query('SELECT * FROM product WHERE product_id = ?', id, (error, result) => {
				!error ? resolve(result) : reject(new Eror(error))
			})
		})
	},
	getProductByName: (product_name) => {
		return new Promise((resolve,reject) => {
			console.log(product_name)
			connection.query(`SELECT * FROM product WHERE product_name LIKE '%${product_name}%'`, (error, result) => {
				!error ? resolve(result) : reject(new Eror(error))
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
					reject(new Eror(error))
				}
			})
		})
	},
	patchProduct: (setData, id) => {
		return new Promise((resolve, reject) => {
			connection.query('UPDATE product SET ? WHERE product_id = ?', [setData, id], (error, result) => {
				console.log(id)
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
						id:id
					}
					resolve(newResult)
				} else {
					reject(new Error(error))
				}
			})
		})
	}
}