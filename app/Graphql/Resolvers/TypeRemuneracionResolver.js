'use strict';

const ResponseException = use('App/Exceptions/ResponseException');
const TypeRemuneracion = use('App/Models/TypeRemuneracion')
const slugify = require('slugify');

class TypeRemuneracionResolver {

    createTypeRemuneracion = async (root, { input }) => {
        try {
            let  { id, descripcion } = input;
            input.slug = slugify(`x${id}`, { lower: true });
            await TypeRemuneracion.create(input);
            return { success: true, code: "201", message: "El tipo de remunearción se creó correctamente!" }
        } catch (error) {
            let message = ResponseException.handle(error);
            return { success: false, code: "501", message }
        }
    }    

}


module.exports = new TypeRemuneracionResolver;