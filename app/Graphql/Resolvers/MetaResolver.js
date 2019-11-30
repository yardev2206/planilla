'use strict';

const Meta = use('App/Models/Meta');
const ResponseException = use('App/Exceptions/ResponseException');

class MetaResolver {

    async getMetas(root, { page = 1, like }, { request }) {
        let metas = Meta.query();
        // filtrar
        if (like) Meta.where('descripcion', 'like', `%${like}%`);
        // obtener relaciones
        metas = await metas.paginate(page, 20);
        // obtener JSON
        return metas.toJSON();
    }


    async createMeta(root, { input }, { request }) {
        try {
            // obtener fecha
            let date = new Date;
            // crear trabajador
            input.year = date.getFullYear();
            await Meta.create(input);
            return { success: true, code: "201", message: "El registro se guardo correctamente!" };
        } catch (error) {
            let message = ResponseException.handle(error);
            return { success: false, code: "501", message };
        }
    }

}

module.exports = new MetaResolver;