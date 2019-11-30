'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CargoSchema extends Schema {
  up () {
    this.create('cargos', (table) => {
      table.increments()
      table.string('slug').unique();
      table.string('descripcion').notNullable();
      table.string('ext_pptto').notNullable();
      table.integer('type_cargo_id', 20);
      table.integer('planilla_id', 20);
      table.boolean('activo').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('cargos')
  }
}

module.exports = CargoSchema
