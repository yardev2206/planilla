'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeRemuneracionSchema extends Schema {
  up () {
    this.create('type_remuneracions', (table) => {
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
    this.drop('type_remuneracions')
  }
}

module.exports = TypeRemuneracionSchema
