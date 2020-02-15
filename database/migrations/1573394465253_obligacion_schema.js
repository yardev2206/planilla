'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ObligacionSchema extends Schema {
  up () {
    this.create('obligacions', (table) => {
      table.increments()
      table.integer('history_id');
      table.string('type_obligacion_id');
      table.string('type_descuento_id');
      table.string('numero_de_documento');
      table.string('numero_de_cuenta');
      table.decimal('porcentaje', 12, 2).defaultTo(0);
      table.decimal('monto', 12, 2).default(0);
      table.boolean('state').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('obligacions')
  }
}

module.exports = ObligacionSchema
