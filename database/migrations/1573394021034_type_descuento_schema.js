'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeDescuentoSchema extends Schema {
  up () {
    this.create('type_descuentos', (table) => {
      table.increments();
      table.string('slug').unique();
      table.string('descripcion').notNullable();
      table.string('alias').notNullable();
      table.string('orden');
      table.boolean('state').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('type_descuentos')
  }
}

module.exports = TypeDescuentoSchema
