'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CronogramaSchema extends Schema {
  up () {
    this.create('cronogramas', (table) => {
      table.increments()
      table.string('slug', 20).unique();
      table.integer('planilla_id', 20);
      table.text('observacion');
      table.integer('dias');
      table.integer('mes');
      table.integer('year');
      table.integer('adicional').defaultTo(0);
      table.boolean('remanente').defaultTo(false);
      table.boolean('state').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('cronogramas')
  }
}

module.exports = CronogramaSchema
