'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeAporteSchema extends Schema {
  up () {
    this.create('type_aportes', (table) => {
      table.increments();
      table.string('slug').unique();
      table.string('descripcion').notNullable();
      table.string('alias').notNullable();
      table.decimal('porcentaje', 10, 2).defaultTo(0);
      table.decimal('monto').defaultTo(0);
      table.boolean('state').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('type_aportes')
  }
}

module.exports = TypeAporteSchema
