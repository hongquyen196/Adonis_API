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
        let object_id = '100002846599560';
        let subscriber_id = '100011702951339';
        try {
            const q = `SELECT subscriber_id, subscribed_id FROM subscription WHERE subscriber_id = ${object_id} AND subscribed_id = ${subscriber_id}`;
            const access_token = 'EAAAAUaZA8jlABADD10dHKlPDVjw1Vjif7p3BZBEugc2T5a0OAePTqXy6tdkYLdqtQDcB8pZC1iZBmXelUFNcZC31l9vJgpYO3ZCupWJGtZBKH0y4NZCVTiWdi5YWBuz8uEEtuQT7pKVmrmz41OSorzNJ9D4kJ7CjkZCmJSv7oNUFkiZCFZBy7do4HbU';
            const fql = `https://graph.facebook.com/fql?q=${q}&access_token=${access_token}`;
            const response = await axios.get(fql);
            return response; 
        } catch (error) {
            return error;
        }      
    }
}

module.exports = LogBusiness