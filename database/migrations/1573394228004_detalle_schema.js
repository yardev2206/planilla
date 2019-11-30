'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetalleSchema extends Schema {
  up () {
    this.create('detalles', (table) => {
      table.increments()
      table.string('persona_id', 20);
      table.integer('work_id', 20);
      table.integer('history_id', 20);
      table.integer('cronograma_id', 20);
      table.string('type_descuento_id', 20);
      table.integer('type_detalle_id', 20);
      table.double('monto');
      table.timestamps()
    })
  }

  down () {
    this.drop('detalles')
  }
}

module.exports = DetalleSchema
