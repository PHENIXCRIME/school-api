'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateSchema extends Schema {
  up () {
    this.create('groups', (table) => {
      table.increments('group_id') //auto INCREMENT -> DEFUALT ->ID
      table.string('name' , 100 ).unique()
    })
  }

  down () {
    this.drop('creates')
  }
}

module.exports = CreateSchema
