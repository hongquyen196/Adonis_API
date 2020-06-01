'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HistoryInteractiveSchema extends Schema {
  up () {
    this.create('history_interactives', (table) => {
      table.increments()
      table.string('object_id', 20).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('history_interactives')
  }
}

module.exports = HistoryInteractiveSchema
