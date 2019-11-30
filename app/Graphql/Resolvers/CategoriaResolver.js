'use strict';

const Categoria = use('App/Models/Categoria');
const Cargo = use('App/Models/Cargo');
const slugify = require('slugify');
const ResponseException = use('App/Exceptions/ResponseException');

class CategoriaResolver {

    async getCargos(root, { page = 1, like }, { request }) {
        let categorias = Categoria.query();
        // filtrar
        if (like) categorias.where('descripcion', 'like', `%${like}%`);
        // obtener relaciones
        categorias = await categorias.paginate(page, 30);
        // obtener JSON
        return categorias.toJSON();
    }


    async createCategoria(root, { input }, { request }) {
        try {
            // variables
            let { cargo_id, descripcion, dedicacion } = input;
            // validar cargo
            let cargo = await Cargo.find(cargo_id);
            if (!cargo) throw new Error("El cargo es Invalido!");
            // crear slug
            dedicacion = dedicacion ? dedicacion : "";
            input.slug = slugify(`${descripcion} ${dedicacion}`, { lower: true });
            // crear categoria
            await Categoria.create(input);
            return { success: true, code: "201", message: "El registro se guardo correctamente!" };
        } catch (error) {
            let message = await ResponseException.handle(error);
            return { success: false, code: "501", message };
        }
    }

}

module.exports = new CategoriaResolver;