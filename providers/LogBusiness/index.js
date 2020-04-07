"use strict"

const Log = use('App/Models/Log')

class LogBusiness {

    constructor() {
    }

    async get() {
        return await Log.query().fetch()
    }

    async create(body) {
        try {
            const { link, content } = body
            const log = new Log()
            log.link = link
            log.content = content
            await log.save()
            return log
        } catch (error) {
            return error
        }

    }
}

module.exports = LogBusiness