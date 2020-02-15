'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RemuneracionSchema extends Schema {
  up () {
    this.create('remuneracions', (table) => {
      table.increments()
      table.integer('history_id');
      table.integer('categoria_id');
      table.string('type_remuneracion_id').notNullable();
      table.boolean('base').defaultTo(false);
      table.boolean('bonificacion').defaultTo(false);
      table.decimal('monto', 12, 2).defaultTo(0);
      table.string('orden').notNullable();
      table.boolean('edit').defaultTo(true);
      table.boolean('state').default(true);
      table.unique(['history_id', 'type_remuneracion_id']);
      table.timestamps()
    })
  }

  down () {
    this.drop('remuneracions')
  }
}

module.exports = RemuneracionSchema
