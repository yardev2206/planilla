'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeRemuneracionSchema extends Schema {
  up () {
    this.create('type_remuneracions', (table) => {
      table.string('id').unique();
      table.string('slug').unique();
      table.string('descripcion').unique();
      table.string('alias').unique();
      table.boolean('base_imponible').defaultTo(true);
      table.string('code_enc');
      table.string('orden');
      table.boolean('edit').defaultTo(true);
      table.boolean('activo').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('type_remuneracions')
  }
}

module.exports = TypeRemuneracionSchema
