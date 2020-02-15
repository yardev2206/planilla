'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlanillaSchema extends Schema {
  up () {
    this.create('planillas', (table) => {
      table.increments()
      table.string('slug').unique();
      table.string('descripcion').notNullable();
      table.string('plame_code');
      table.string('plame_type');
      table.boolean('state').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('planillas')
  }
}

module.exports = PlanillaSchema
