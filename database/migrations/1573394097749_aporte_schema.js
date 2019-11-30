'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AporteSchema extends Schema {
  up () {
    this.create('aportes', (table) => {
      table.increments()
      table.string('persona_id', 20);
      table.integer('work_id', 20);
      table.integer('history_id', 20);
      table.integer('cronograma_id', 20);
      table.string('type_aporte_id', 20);
      table.double('monto').defaultTo(0);
      table.string('orden');
      table.boolean('edit');
      table.timestamps()
    })
  }

  down () {
    this.drop('aportes')
  }
}

module.exports = AporteSchema
