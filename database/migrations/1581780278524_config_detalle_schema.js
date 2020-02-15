'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConfigDetalleSchema extends Schema {
  up () {
    this.create('config_detalles', (table) => {
      table.increments()
      table.integer('type_detalle_id').notNullable();
      table.integer('config_work_id').notNullable();
      table.decimal('porcentaje', 12, 2).defaultTo(0);
      table.decimal('monto', 12, 2).defaultTo(0);
      table.date('fecha_inicio').notNullable();
      table.date('fecha_termino');
      table.boolean('state').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('config_detalles')
  }
}

module.exports = ConfigDetalleSchema
