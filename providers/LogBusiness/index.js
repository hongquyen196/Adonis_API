"use strict"

const Log = use('App/Models/Log')
const axios = require('axios');

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

    async test() {
        let object_id = '100011702951339';
        let subscriber_id = '100002846599560';
        try {
            const q = `SELECT subscriber_id, subscribed_id FROM subscription WHERE subscriber_id = ${object_id} AND subscribed_id = ${subscriber_id}`;
            const access_token = 'EAAAAUaZA8jlABAPgk93d2k6L1xgj35iXpZC8przJV4p0xYRu3nrUd4dwi8FqxZAUSMceSe7HMs06zZA7IDVh02eHd5d4d96prLOwfGVbl6pIfcLE1K9qjDEbkhDRZCcwIm8tx7yOXcL4PHbi595ZBJVajs4ZAycjhsSZBVEWd1kgLgZDZD';
            const fql = `https://graph.facebook.com/fql?q=${q}&access_token=${access_token}`;
            const { data: result } = await axios.get(fql);
            return result;
        } catch (error) {
            return error;
        }
    }
}

module.exports = LogBusiness