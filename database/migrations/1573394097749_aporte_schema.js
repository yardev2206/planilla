'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AporteSchema extends Schema {
  up () {
    this.create('aportes', (table) => {
      table.increments()
      table.integer('history_id').notNullable();
      table.integer('type_aporte_id').notNullable();
      table.decimal('monto', 12, 2).defaultTo(0);
      table.string('orden').notNullable();
      table.boolean('edit').defaultTo(true);
      table.boolean('state').defaultTo(true);
      table.unique(['history_id', 'type_aporte_id']);
      table.timestamps()
    })
  }

  down () {
    this.drop('aportes')
  }
}

module.exports = AporteSchema
