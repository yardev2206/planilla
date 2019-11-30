'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlanillaSchema extends Schema {
  up () {
    this.create('planillas', (table) => {
      table.increments()
      table.string('slug').unique();
      table.string('descripcion').notNullable();
      table.boolean('activo').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('planillas')
  }
}

module.exports = PlanillaSchema
