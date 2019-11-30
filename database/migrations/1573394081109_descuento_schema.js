'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DescuentoSchema extends Schema {
  up () {
    this.create('descuentos', (table) => {
      table.increments()
      table.string('persona_id', 20);
      table.integer('work_id', 20);
      table.integer('history_id');
      table.integer('cronograma_id', 20);
      table.integer('type_descuento_id', 20);
      table.double('monto').defaultTo(0);
      table.string('orden', 10);
      table.boolean('edit').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('descuentos')
  }
}

module.exports = DescuentoSchema
