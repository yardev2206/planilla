'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeCargoSchema extends Schema {
  up () {
    this.create('type_cargos', (table) => {
      table.increments()
      table.string('slug').unique();
      table.string('descripcion').notNullable();
      table.integer('planilla_id');
      table.timestamps()
    })
  }

  down () {
    this.drop('type_cargos')
  }
}

module.exports = TypeCargoSchema
