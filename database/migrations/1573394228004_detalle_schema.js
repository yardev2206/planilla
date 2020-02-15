'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetalleSchema extends Schema {
  up () {
    this.create('detalles', (table) => {
      table.increments()
      table.integer('history_id');
      table.integer('type_detalle_id');
      table.integer('type_descuento_id');
      table.decimal('monto', 12, 2).defaultTo(0);
      table.timestamps()
    })
  }

  down () {
    this.drop('detalles')
  }
}

module.exports = DetalleSchema
