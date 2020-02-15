'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConfigAporteSchema extends Schema {
  up () {
    this.create('config_aportes', (table) => {
      table.increments()
      table.integer('cargo_id').notNullable();
      table.integer('type_aporte_id').notNullable();
      table.decimal('monto', 12, 2).defaultTo(0);
      table.decimal('limite', 12, 2).defaultTo(0);
      table.integer('year').notNullable();
      table.boolena('state').defaultTo(true);
      table.unique(['cargo_id', 'type_aporte_id', 'year']);
      table.timestamps()
    })
  }

  down () {
    this.drop('config_aportes')
  }
}

module.exports = ConfigAporteSchema
