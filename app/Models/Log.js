'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Log extends Model {
    static boot() {
        super.boot()
        this.addHook('beforeCreate', 'LogHook.encrypt')
        this.addHook('afterFetch', 'LogHook.decrypt')
    }
}

module.exports = Log
