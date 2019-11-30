'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HistorySchema extends Schema {
  up () {
    this.create('histories', (table) => {
      table.increments()
      table.string('slug').unique();
      table.string('persona_id');
      table.integer('work_id', 20);
      table.integer('meta_id', 20);
      table.integer('planilla_id', 20);
      table.integer('cargo_id', 20);
      table.integer('categoria_id', 20);
      table.integer('cronograma_id', 20);
      table.integer('afp_id', 20);
      table.integer('type_afp_id', 20);
      table.string('numero_de_cussp', 40);
      table.integer('type_aporte_id', 20);
      table.string('numero_de_aporte', 40);
      table.integer('banco_id', 20);
      table.integer('numero_de_cuenta', 40);
      table.integer('sindidato_id', 20);
      table.string('orden', 10);
      table.string('token', 200);
      table.text('observacion');
      table.double('base').defaultTo(0);
      table.double('base_enc').defaultTo(0);
      table.double('total_bruto').defaultTo(0);
      table.double('total_descuentos').defaultTo(0);
      table.double('total_aportes').defaultTo(0);
      table.double('total_neto').default(0);
      table.timestamps()
    })
  }

  down () {
    this.drop('histories')
  }
}

module.exports = HistorySchema
