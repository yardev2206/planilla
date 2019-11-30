'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConceptoSchema extends Schema {
  up () {
    this.create('conceptos', (table) => {
      table.increments()
      table.string('type_remuneracion_id', 20);
      table.integer('categoria_id', 20);
      table.double('monto');
      table.timestamps()
    })
  }

  down () {
    this.drop('conceptos')
  }
}

module.exports = ConceptoSchema
