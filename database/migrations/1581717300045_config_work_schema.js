'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConfigWorkSchema extends Schema {
  up () {
    this.create('config_works', (table) => {
      table.increments()
      table.integer('person_id').notNullable();
      table.integer('work_id').notNullable();
      table.integer('planilla_id').notNullable();
      table.integer('meta_id').notNullable();
      table.integer('cargo_id').notNullable();
      table.integer('type_categoria_id').notNullable();
      table.integer('banco_id').notNullable();
      table.string('numero_de_cuenta');
      table.integer('type_remuneracion_id');
      table.decimal('monto', 12, 2).defaultTo(0);
      table.enu('pap', ['CONTRATADO', 'NOMBRADO', 'INVITADO', 'OTROS']).notNullable();
      table.text('observacion');
      table.string('orden').notNullable();
      table.boolean('state').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('config_works')
  }
}

module.exports = ConfigWorkSchema
