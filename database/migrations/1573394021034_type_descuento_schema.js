'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeDescuentoSchema extends Schema {
  up () {
    this.create('type_descuentos', (table) => {
      table.string('id').unique();
      table.string('slug').unique();
      table.string('descripcion');
      table.string('code_enc', 20);
      table.string('orden', 10);
      table.boolean('edit').defaultTo(true);
      table.boolean('activo').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('type_descuentos')
  }
}

module.exports = TypeDescuentoSchema
