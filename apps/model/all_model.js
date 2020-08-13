const connection = require('../config/mysql')

module.exports = {
	getAll: (table) => {
		return new Promise((resolve,reject) => {
			connection.query(`SELECT * FROM ${table}`, (error, result) => {
				!error ? resolve(result) : reject(new Eror(error))
			})
		})
	},
	getWhere: (table, id) => {
		return new Promise((resolve,reject) => {
			connection.query(`SELECT * FROM ${table} WHERE ?`, [id], (error, result) => {
				!error ? resolve(result) : reject(new Eror(error))
			})
		})
	},
	post: (table, setData) => {
		return new Promise((resolve, reject) => {
			connection.query(`INSERT INTO ${table} SET ?`, setData, (error, result) => {
				if (!error) {
					const newResult = {
						id: result.insertId,
						...setData
					}
					resolve(newResult)
				} else {
					reject(new Eror(error))
				}
			})
		})
	},
	patch: (table, setData, id) => {
		return new Promise((resolve, reject) => {
			connection.query('UPDATE ${table} SET ? WHERE ?', [setData, id], (error, result) => {
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
	delete: (table, id) => {
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