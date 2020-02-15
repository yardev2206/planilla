'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConfigTypeAfpSchema extends Schema {
  up () {
    this.create('config_type_afps', (table) => {
      table.increments()
      table.integer('afp_id').notNullable();
      table.integer('type_afp_id').notNullable();
      table.decimal('porcentaje', 10, 2);
      table.string('type_descuento_id', 20);
      table.boolean('state').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('config_type_afps')
  }
}

module.exports = ConfigTypeAfpSchema
