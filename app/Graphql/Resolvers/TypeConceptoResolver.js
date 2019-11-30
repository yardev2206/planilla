'use strict';

const TypeConcepto = use('App/Models/TypeConcepto');
const ResponseException = use('App/Exceptions/ResponseException');
const slugify = require('slugify');


class TypeConceptoResolver
{

    createTypeConcepto = async (root, { resolucion }) => {
        try {
            let slug = await slugify(`${resolucion}`, { lower: true });
            await TypeConcepto.create({ slug, resolucion });
            return { success: true, code: "201", message: "El registro se creó correctamente!" };
        } catch (error) {
            let message = await ResponseException.handle(error);
            return { success: false, code: "501", message };
        }
    }

}


module.exports = new TypeConceptoResolver;