'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeAfpSchema extends Schema {
  up () {
    this.create('type_afps', (table) => {
      table.increments()
      table.string('descripcion');
      table.double('porcentaje');
      table.integer('afp_id', 20);
      table.string('type_descuento_id', 20);
      table.timestamps()
    })
  }

  down () {
    this.drop('type_afps')
  }
}

module.exports = TypeAfpSchema
