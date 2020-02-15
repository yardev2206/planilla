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
      table.integer('type_cargo_id').notNullable();
      table.integer('planilla_id').notNullable();
      table.boolean('state').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('cargos')
  }
}

module.exports = CargoSchema
