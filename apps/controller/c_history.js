const { getAllHistory, getHistoryById, getItemByHistory, postHistory, getHistoryCount, getHistory, getHistoryWeekCount, getHistoryTodayIncome, getHistoryThisYearIncome, getDailyIncome, getHistoryByInvoice } = require('../model/m_history')
const { postOrderItem } = require('../model/m_order')
const helper = require('../helper/my_helper')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
    getAllHistory: async (request, response) => {
        let { page, limit } = request.query
        page = page == undefined ? 1 : parseInt(page)
        limit = limit == undefined ? 9 : parseInt(limit)

        const totalData = await getHistoryCount()
        const totalPage = Math.ceil(totalData / limit)
        let offset = page * limit - limit

        let prevLink = helper.getPrevLink(page, request.query)
        let nextLink = helper.getNextLink(page, totalPage, request.query)

        const pageInfo = {
            page,
            totalPage,
            limit,
            totalData,
            prevLink: prevLink && `http://127.0.0.1:3000/history?${prevLink}`,
            nextLink: nextLink && `http://127.0.0.1:3000/history?${nextLink}`
        }

        try {
            const result = await getHistory(limit, offset)
            for (let i = 0; i < result.length; i++) {
                result[i].items = await getItemByHistory(result[i].history_id)
            }
            const newResult = { result, pagination: pageInfo }
            client.set(`gethistories:${JSON.stringify(request.query)}`, JSON.stringify(newResult))
            return helper.response(response, 200, "Success Get Histories", result, pageInfo)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getHistoriesIncome: async (request, response) => {
        try {
            let { period } = request.query

            if (period == undefined || period == '') {
                period = 'week'
            }

            const dataThisWeek = await getHistoryWeekCount()
            const todayIncome = await getHistoryTodayIncome()
            const thisYearIncome = await getHistoryThisYearIncome()
            const dailyIncome = await getDailyIncome(period)
            const newResult = {
                thisWeekIncome: dataThisWeek,
                todayIncome,
                thisYearIncome,
                dailyIncome
            }
            client.set(`gethistoriesIncome:${JSON.stringify(request.query)}`, JSON.stringify(newResult))
            return helper.response(response, 200, "Success get income", newResult)
        } catch (e) {
            return helper.response(response, 400, "Bad Request", e)
        }
    },
    getHistoryById: async (request, response) => {
        try {
            const { id } = request.params
            const cartResult = await getItemByHistory(id)
            const result = await getHistoryById(id, cartResult)
            client.set(`gethistorybyid:${id}`, JSON.stringify(result))

            if (result.length > 0) {
                return helper.response(response, 200, `Success Get History by ID ${id}`, result)
            } else {
                return helper.response(response, 404, `History by ID ${id} not found`, result)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    postHistory: async (request, response) => {
        const itemsData = request.body.items
        if (itemsData == undefined || itemsData == '') {
            return helper.response(response, 400, "Cart is empty", null)
        }
        // itemsData == undefined || itemsData == '' ? helper.response(response, 400, "Cart is Empty", null) : null
        const history_invoice = new Date().getTime()
        const itemsTotal = itemsData.map(item => item.subtotal).reduce((a, b) => a + b)
        const history_ppn = (0.1 * itemsTotal)
        const history_total = itemsTotal + history_ppn
        const cashier_name = request.body.cashier_name
        try {
            const invoiceData = {
                history_invoice,
                history_ppn,
                history_total,
                cashier_name,
                history_created_at: new Date()
            }
            const insertHistory = await postHistory(invoiceData)
            const result = await postOrderItem(insertHistory, itemsData)
            return helper.response(response, 200, "Success Post History", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    sendEmail: async (request, response) => {
        const nodemailer = require("nodemailer")
        const { history_invoice, target_email } = request.body
        
        if ( 
            history_invoice == '' || history_invoice == undefined ||
            target_email == '' || target_email == undefined
            ) {
            return helper.response(response, 403, 'Data is not complete')
        }

        try {
            const getHistory = await getHistoryByInvoice(history_invoice)
            if (getHistory.length < 1) {
                return helper.response(response, 404, `Sorry history by invoice ID ${history_invoice} is not found`)
            } else {
                getHistory[0].items = await getItemByHistory(getHistory[0].history_id)

                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true,
                    auth: {
                        user: process.env.USER_EMAIL,
                        pass: process.env.PASS_EMAIL
                    },
                });
                const v = getHistory[0]
                let email_body = `
                <h3>Invoice no #${v.history_invoice}</h3>
                <div>
                    <span>Cahsier: ${v.cashier_name }</span><br>
                    <span>Date: ${ v.history_created_at }</span><br>
                    <span>Items:</span>
                </div>
                `
                v.items.forEach((item, index) => {
                    email_body += `
                    <div>
                        - ${item.product_name} x${item.qty}: Rp ${helper.formatN(item.subtotal)}
                    </div> 
                    `
                });
                email_body += `
                <div style="margin-top:10px">
                    <span>Tax: Rp ${helper.formatN(v.history_ppn)}</span><br>
                    <span>Total: Rp ${helper.formatN(v.history_total)}</span><br>
                </div>
                <div style="margin-top:25px">
                    <span>thank you for using our services :)</span>
                </div>
                `
                let info = await transporter.sendMail({
                    from: `"Cemol Dev 👻" <${process.env.USER_EMAIL}>`,
                    to: target_email,
                    subject: "Your Invoice ✔",
                    html: email_body
                });
                const msg = { message_set: info.messageId }
                const result = {
                    ...msg,
                    getHistory
                }
                
                return helper.response(response, 200, 'Email has been sent :)', result)
            }
        } catch (e) {
            return helper.response(response, 400, 'Bad Request', e)
        }
    }
}