'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DescuentoSchema extends Schema {
  up () {
    this.create('descuentos', (table) => {
      table.increments()
      table.integer('history_id');
      table.integer('type_descuento_id', 20);
      table.decimal('monto').defaultTo(0);
      table.string('orden').notNullable();
      table.boolean('edit').defaultTo(true);
      table.boolean('state').defaultTo(true);
      table.unique(['history_id', 'type_descuento_id']);
      table.timestamps()
    })
  }

  down () {
    this.drop('descuentos')
  }
}

module.exports = DescuentoSchema
