'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ObligacionSchema extends Schema {
  up () {
    this.create('obligacions', (table) => {
      table.increments()
      table.string('persona_id', 20);
      table.integer('work_id', 20);
      table.integer('history_id', 20);
      table.integer('cronograma_id', 20);
      table.string('type_descuento_id', 20);
      table.string('nombre_completo');
      table.string('numero_de_documento');
      table.string('numero_de_cuenta');
      table.double('porcentaje').defaultTo(0);
      table.double('monto');
      table.timestamps()
    })
  }

  down () {
    this.drop('obligacions')
  }
}

module.exports = ObligacionSchema
