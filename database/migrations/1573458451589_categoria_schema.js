'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriaSchema extends Schema {
  up () {
    this.create('categorias', (table) => {
      table.increments()
      table.string('slug').unique();
      table.string('descripcion');
      table.string('dedicacion');
      table.integer('cargo_id');
      table.boolean('activo').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('categorias')
  }
}

module.exports = CategoriaSchema
