'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HistorySchema extends Schema {
  up () {
    this.create('histories', (table) => {
      table.increments()
      table.string('slug').unique();
      table.integer('person_id').notNullable();
      table.integer('work_id').notNullable();
      table.integer('config_work_id').notNullable();
      table.integer('planilla_id').notNullable();
      table.integer('meta_id').notNullable();
      table.integer('cargo_id').notNullable();
      table.integer('type_categoria_id').notNullable();
      table.integer('cronograma_id').notNullable();
      table.integer('afp_id').notNullable();
      table.integer('type_afp_id').notNullable();
      table.integer('banco_id');
      table.string('numero_de_cuenta', 40);
      table.integer('type_remuneracion_id');
      table.decimal('monto', 12, 2);
      table.text('observacion');
      table.integer('jornada_laboral').defaultTo(30);
      table.enu('pap', ['CONTRATADO', 'NOMBRADO', 'INVITADO', 'OTROS']).notNullable();
      table.string('orden').notNullable();
      table.boolean('state').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('histories')
  }
}

module.exports = HistorySchema
