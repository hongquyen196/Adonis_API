'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InteractiveSchema extends Schema {
  up () {
    this.create('interactives', (table) => {
      table.increments()
      table.string('object_id', 20).notNullable()
      table.string('type', 10).notNullable()
      table.integer('quantity_buy').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('interactives')
  }
}

module.exports = InteractiveSchema
