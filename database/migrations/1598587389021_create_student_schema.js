'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateStudentSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments('student_id')
      table.varchar('firstname' ,120).notNullable()
      table.varchar('lastname' ,120).notNullable()
      table.string('email').notNullable().unique()
      table.string('password' ,100).notNullable()
      table.integer('group_id').unsigned().notNullable()
      table.timestamps()


      table.foreign('group_id')
      .references('groups.group_id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = CreateStudentSchema
