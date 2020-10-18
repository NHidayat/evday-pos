const connection = require('../config/mysql')

module.exports = {
    getItemByHistory: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM order_item WHERE history_id = ?', id, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    getHistoryWeekCount: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT COUNT(*) AS total FROM history WHERE YEARWEEK(history_created_at) = YEARWEEK(NOW())', (error, result) => {
                !error ? resolve(result[0].total) : reject(new Error(error))
            })
        })
    },
    getHistoryTodayIncome: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT SUM(history_total) AS total FROM history WHERE DATE(history_created_at) = CURDATE()', (error, result) => {
                !error ? resolve(result[0].total) : reject(new Error(error))
            })
        })
    },
    getDailyIncome: (period) => {
        return new Promise((resolve, reject) => {
            // connection.query('SELECT DATE(history_created_at) as date, SUM(history_total) AS total FROM history WHERE YEARWEEK(history_created_at) = YEARWEEK(NOW()) GROUP BY  DATE(history_created_at)', (error, result) => {
            if (period == 'month') {
                connection.query('SELECT DATE(history_created_at) as date, SUM(history_total) AS total FROM history WHERE MONTH(history_created_at) = MONTH(CURRENT_DATE()) AND YEAR(history_created_at) = YEAR(CURRENT_DATE()) GROUP BY DATE(history_created_at)', (error, result) => {
                    !error ? resolve(result) : reject(new Error(error))
                })
            } else {
                connection.query('SELECT DATE(history_created_at) as date, SUM(history_total) AS total FROM history WHERE YEARWEEK(history_created_at) = YEARWEEK(NOW()) GROUP BY  DATE(history_created_at)', (error, result) => {
                    !error ? resolve(result) : reject(new Error(error))
                })
            }
        })
    },
    getHistoryThisYearIncome: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT SUM(history_total) AS total FROM history WHERE YEAR(history_created_at) = YEAR(NOW())', (error, result) => {
                !error ? resolve(result[0].total) : reject(new Error(error))
            })
        })
    },
    getAllHistory: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM history', (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    getHistory: (limit, offset) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM history ORDER BY history_created_at DESC LIMIT ${limit} OFFSET ${offset}`, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    getHistoryById: (id, itemsData) => {
        return new Promise((resolve, reject) => {
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
                    return reject(new Error(error))
                }
            })
        })
    },
    postHistory: (setData) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO history SET ?', setData, (error, result) => {
                if (!error) {
                    const insertId = result.insertId
                    const { history_invoice, history_created_at, history_ppn, history_total, cashier_name } = setData
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
    getHistoryCount: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT COUNT(*) AS total FROM history', (error, result) => {
                !error ? resolve(result[0].total) : reject(new Error(error))
            })
        })
    },
    getHistoryByInvoice: (invoice) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM history WHERE history_invoice = ?', invoice, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
}