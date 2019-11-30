'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeConceptoSchema extends Schema {
  up () {
    this.create('type_conceptos', (table) => {
      table.increments();
      table.string('slug').unique();
      table.string('resolucion');
      table.timestamps()
    })
  }

  down () {
    this.drop('type_conceptos')
  }
}

module.exports = TypeConceptoSchema
