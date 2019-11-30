'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RemuneracionSchema extends Schema {
  up () {
    this.create('remuneracions', (table) => {
      table.increments()
      table.string('slug').unique();
      table.string('persona_id', 20)
      table.integer('work_id', 20);
      table.integer('history_id', 20);
      table.integer('cronograma_id', 20)
      table.string('type_remuneracion_id').notNullable();
      table.boolean('base_imponible').notNullable();
      table.double('monto').defaultTo(0);
      table.string('orden', 10);
      table.boolean('edit').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('remuneracions')
  }
}

module.exports = RemuneracionSchema
