'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlameRemuneracionSchema extends Schema {
  up () {
    this.create('plame_remuneracions', (table) => {
      table.increments()
      table.string('code', 4).notNullable();
      table.integer('type_remuneracion_id').notNullable();
      table.integer('cargo_id').notNullable();
      table.boolean('remanente').defaultTo(false);
      table.boolean('state').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('plame_remuneracions')
  }
}

module.exports = PlameRemuneracionSchema
