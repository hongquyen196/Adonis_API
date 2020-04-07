'use strict'
const LogBusiness = use('App/Provider/LogBusiness')

class LogController {

    async get({ request, response }) {
        const logs = await LogBusiness.get()
        return response.json({
            meta: {
                code: 200,
                message: 'success'
            },
            data: {
                logs: logs
            }
        })
    }

    async create({ request, response }) {
        const body = request.post()
        const log = await LogBusiness.create(body)
        return response.json({
            meta: {
                code: 200,
                message: 'success'
            },
            data: log
        })
    }
}

module.exports = LogController
