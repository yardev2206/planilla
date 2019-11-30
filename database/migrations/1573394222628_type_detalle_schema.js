'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeDetalleSchema extends Schema {
  up () {
    this.create('type_detalles', (table) => {
      table.increments()
      table.string('descripcion');
      table.string('type_descuento_id');
      table.double('porcentaje').defaultTo(0);
      table.timestamps()
    })
  }

  down () {
    this.drop('type_detalles')
  }
}

module.exports = TypeDetalleSchema
