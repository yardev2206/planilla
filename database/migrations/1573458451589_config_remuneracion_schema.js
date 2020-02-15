'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConfigRemuneracionSchema extends Schema {
  up () {
    this.create('config_remuneracions', (table) => {
      table.increments()
      table.integer('type_remuneracion_id').notNullable();
      table.integer('type_categoria_id').notNullable();
      table.decimal('monto', 12, 2).defaultTo(0);
      table.boolean('state').defaultTo(true);
      table.unique('type_remuneracion_id', 'type_categoria_id');
      table.timestamps();
    })
  }

  down () {
    this.drop('config_remuneracions');
  }
}

module.exports = ConfigRemuneracionSchema
