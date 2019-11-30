'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CronogramaSchema extends Schema {
  up () {
    this.create('cronogramas', (table) => {
      table.increments()
      table.string('slug', 20).unique();
      table.integer('planilla_id', 20);
      table.integer('dias');
      table.integer('mes');
      table.integer('year');
      table.boolean('adicional').defaultTo(false);
      table.integer('numero');
      table.text('observacion');
      table.integer('num_historial').defaultTo(0);
      table.boolean('activo').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('cronogramas')
  }
}

module.exports = CronogramaSchema
