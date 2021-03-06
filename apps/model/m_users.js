const connection = require('../config/mysql')

module.exports = {
    getUsers: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user', (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    postUser: (setData) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO user SET ?', setData, (error, result) => {
                if (!error) {
                    const newResult = {
                        id: result.insertId,
                        ...setData
                    }
                    delete newResult.user_password
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    cekUser: (email) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT user_id, user_email, user_password, user_name, user_role, user_status FROM user WHERE user_email = ?', email, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    getUserById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user WHERE user_id = ?', id, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    patchUser: (data, id) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE user SET ? WHERE user_id = ?', [data, id], (error, result) => {
                if (!error) {
                    const newResult = {
                        user_id: id,
                        ...data
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getUserByKey: (key) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT user_id, user_email, user_name FROM user WHERE user_key = ?', key, (error, result) => {
                 !error ? resolve(result) : reject(new Error(error))
            })
        })
    }
}