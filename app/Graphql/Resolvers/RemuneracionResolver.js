'use strict';

const Remuneracion = use('App/Models/Remuneracion');
const TypeRemuneracion = use('App/Models/TypeRemuneracion');
const ResponseException = use('App/Exceptions/ResponseException');
const Cronograma = use('App/Models/Cronograma');
const History = use('App/Models/History');
const slugify = require('slugify');

class RemuneracionResolver 
{

    constructor() {
        this.cronograma_id;
        this.type_remuneraciones = [];
        this.storage = [];
    }

    createRemuneracion = async (root, { input }) => {
       try {
           // validar history
           let history = await History.find(input.history_id);
           if (!history) throw new Error("El historial no existe!");
           // validate tipo de remuneración
            let validate = await this.validateRemuneracion(input.cronograma_id, history, [input.type_remuneracion_id]);
            if (!validate.success) throw new Error(validate.message);
            // configurar remuneración
            await this.type_remuneraciones.filter(async type => {
                // configurar slug
                let { history_id, type_remuneracion_id } = input;
                input.slug = await slugify(`${history_id} ${type_remuneracion_id}`, { lower: true });
                input.persona_id = history.persona_id;
                input.work_id = history.work_id;
                input.base_imponible = type.base_imponible;
                input.orden = type.orden;
                input.edit = type.edit;
                // crear remuneracion
                await Remuneracion.create(input);
            })
            // response
            return { success: true, code: "201", message: "Se agrego la remunearción correctamente!" };
       } catch (error) {
           let message = await ResponseException.handle(error);
           return { success: false, code: "501",  message };
       }  
    }


    createRemuneraciones = async (root, { remuneraciones = [] }) => {

    }


    config = (history, conceptos) => {

    }


    validateRemuneracion = async (cronograma_id, history, typeIds = []) => {
        try {
            // obtener los tipos de remuneraciones
            let type_remuneraciones = await TypeRemuneracion.query()
                .whereIn('id', typeIds)
                .where('activo', true)
                .fetch();
            // almacenamos globalmente
            this.type_remuneraciones = await type_remuneraciones.toJSON();
            // validamos type_de_remuneracion
            if (!this.type_remuneraciones.length) throw new Error("Los tipos de remuneración son invalidos"); 
            // validamos el cronograma
            let cronograma = await Cronograma.query()
                .where('id', cronograma_id)
                .where('activo', 1)
                .first();
            if (!cronograma) throw new Error("El crongrama no existe!"); 
            return { success: true, message: "" };
        } catch (error) {
            let message = await ResponseException.handle(error);
            return { success: false, message };
        }
    }

}


module.exports = new RemuneracionResolver;