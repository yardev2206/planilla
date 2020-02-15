'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlameDescuentoSchema extends Schema {
  up () {
    this.create('plame_descuentos', (table) => {
      table.increments()
      table.string('code', 4).notNullable();
      table.integer('type_descuento_id').notNullable();
      table.integer('cargo_id').notNullable();
      table.boolean('remanente').defaultTo(false);
      table.boolean('state').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('plame_descuentos')
  }
}

module.exports = PlameDescuentoSchema
