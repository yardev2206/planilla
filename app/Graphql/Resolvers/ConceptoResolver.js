'use strict';

const TypeConcepto = use('App/Models/TypeConcepto');
const TypeRemuneracion = use('App/Models/TypeRemuneracion');
const Concepto = use('App/Models/Concepto');
const ResponseException = use('App/Exceptions/ResponseException');


class ConceptoResolver
{

    createConcepto = async (root, { input }) => {
        try {
            // validar el type_concepto
            let type_concepto = await TypeConcepto.find(input.type_concepto_id);
            if (!type_concepto) throw new Error("El tipo de concepto es invalido!");
            // validamos el type_remuneracion
            let type_remuneracion = await TypeRemuneracion.find(input.type_remuneracion_id);
            if (!type_remuneracion) throw new Error("El tipo de remuneración es invalido!");
            // guardar
            await Concepto.create(input);
            return { success: true, code: "201", message: "El concepto se guardó correctamente!" };
        } catch (error) {
            let message = await ResponseException.handle(error);
            return { success: false, code: "501", message }
        }
    }   

}


module.exports = new ConceptoResolver;