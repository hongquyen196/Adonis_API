'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FacebookUserSchema extends Schema {
  up () {
    this.create('facebook_users', (table) => {
      table.increments()
      table.string('uid', 20).notNullable()
      table.string('uname', 100).notNullable()
      table.string('name', 100)
      table.string('avatar', 255)
      table.integer('status', 1).notNullable().defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('facebook_users')
  }
}

module.exports = FacebookUserSchema
