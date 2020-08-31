'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTeacherSchema extends Schema {
  up () {
    this.create('teachers', (table) => {
      table.increments('teacher_id')
      table.varchar('firstname' ,120).notNullable()
      table.varchar('lastname' ,120).notNullable()
      table.string('email').notNullable().unique()
      table.string('password' ,100).notNullable()
      table.timestamps()

    })
  }

  down () {
    this.drop('teachers')
  }
}

module.exports = CreateTeacherSchema
