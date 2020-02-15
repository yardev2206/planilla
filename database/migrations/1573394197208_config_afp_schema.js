'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConfigAfpSchema extends Schema {
  up () {
    this.create('config_afps', (table) => {
      table.increments()
      table.string('descripcion');
      table.decimal('porcentaje', 12, 2);
      table.decimal('limite', 12, 2).defaultTo(0);
      table.integer('type_descuento_id').notNullable();
      table.boolean('state').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('config_afps')
  }
}

module.exports = ConfigAfpSchema
