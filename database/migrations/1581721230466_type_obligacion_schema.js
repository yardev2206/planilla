'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeObligacionSchema extends Schema {
  up () {
    this.create('type_obligacions', (table) => {
      table.increments()
      table.string('nombre_completo');
      table.string('numero_de_documento');
      table.date('fecha_inicio').notNullable();
      table.date('fecha_termino');
      table.decimal('porcentaje', 12, 2).defaultTo(0);
      table.decimal('monto').defaultTo(0);
      table.integer('config_work_id').notNullable();
      table.integer('type_descuento_id').notNullable();
      table.boolean('state').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('type_obligacions')
  }
}

module.exports = TypeObligacionSchema
