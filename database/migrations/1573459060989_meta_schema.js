'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MetaSchema extends Schema {
  up () {
    this.create('metas', (table) => {
      table.string('id', 20).unique();
      table.string('descripcion').notNullable();
      table.string('sectorID', 20);
      table.string('sector');
      table.string('pliegoID');
      table.string('pliego');
      table.string('unidadID');
      table.string('unidad');
      table.string('programaID');
      table.string('programa');
      table.string('funcionID');
      table.string('funcion');
      table.string('subProgramaID');
      table.string('subPrograma');
      table.string('actividadID');
      table.string('actividad');
      table.integer('year').notNullable();
      table.boolean('activo').defaultTo(true);
      table.timestamps()
    })
  }

  down () {
    this.drop('metas')
  }
}

module.exports = MetaSchema
