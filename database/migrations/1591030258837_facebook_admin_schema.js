'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FacebookAdminSchema extends Schema {
  up () {
    this.create('facebook_admins', (table) => {
      table.increments()
      table.string('user_id', 20).notNullable()
      table.string('access_token', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('facebook_admins')
  }
}

module.exports = FacebookAdminSchema
