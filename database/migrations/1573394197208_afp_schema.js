'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AfpSchema extends Schema {
  up () {
    this.create('afps', (table) => {
      table.increments()
      table.string('descripcion');
      table.double('aporte');
      table.double('prima');
      table.double('prima_limite');
      table.timestamps()
    })
  }

  down () {
    this.drop('afps')
  }
}

module.exports = AfpSchema
