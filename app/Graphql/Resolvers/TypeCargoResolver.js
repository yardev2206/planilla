'use strict';

const TypeCargo = use('App/Models/TypeCargo');
const Planilla = use('App/Models/Planilla');
const ResponseException = use('App/Exceptions/ResponseException');
const slugify = require('slugify');

class TypeCargoResolver 
{

    async createTypeCargo(root, { planilla_id, descripcion }) {
        try {
            // validar planilla
            let planilla = await Planilla.find(planilla_id);
            if (!planilla) throw new Error("La planilla es invalida!");
            // crear slug
            let slug = await slugify(descripcion, { lower: true });
            // crear tipo de cargo
            await TypeCargo.create({ planilla_id, descripcion, slug });
            // response
            return { code: "201", succes: true, message: "El registro se creó correctamente!" }
        } catch (error) {
            let message = ResponseException.handle(error);
            return { code: "501", success: false, message }
        }
    }

}


module.exports = new TypeCargoResolver;