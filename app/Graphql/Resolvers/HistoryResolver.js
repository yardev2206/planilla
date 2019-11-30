'use strict';

const History = use('App/Models/History');
const Cronograma = use('App/Models/Cronograma');
const Meta = use('App/Models/Meta');
const Planilla = use('App/Models/Planilla');
const Cargo = use('App/Models/Cargo');
const Categoria = use('App/Models/Categoria');
const ResponseException = use('App/Exceptions/ResponseException');
const slugify = require('slugify');

class HistoryResolver {

    async getHistories(root, { page = 1, like }, { request }) {
        let works = Work.query();
        // filtrar
        if (like) works.where('persona_id', 'like', `%${like}%`);
        // obtener relaciones
        works = await works.paginate(page, 20);
        // obtener JSON
        return works.toJSON();
    }


    /** 
     * crear history individualmente
     * @param {*} root 
     * @param {*} param1 
     * @param {*} param2 
     */
    createHistory = async (root, { input }, { request }) => {
        try {
            // validamos el history antes de crear
            let validate = await this.validateHistory(input.cronograma_id, input);
            if (!validate.success) throw new Error(validate.message); 
            // configurar slug
            let slug = `${input.work_id} ${input.cronograma_id}`;
            input.slug = await slugify(slug, { lower: true });
            // crear historial
            await History.create(input);
            return { success: true, code: "201", message: "El registro se guardo correctamente!" };
        } catch (error) {
            let message = ResponseException.handle(error);
            return { success: false, code: "501", message };
        }
    }


    /**
     * crear historial masivamente
     * @param {*} root 
     * @param {*} param1 
     */
    createHistories = async (root, { histories = [] }) => {
        try {
            // configurar slug
            await histories.map(async obj => {
                let slug = `${obj.work_id} ${obj.cronograma_id}`;
                obj.slug = await slugify(slug, { lower: true });
                return obj;
            });
            // insertar masivamente
            await History.createMany(histories);
            return { success: true, code: "201", message: "Se crearón los historiales correctamente!" }
        } catch (error) {
            let message = await ResponseException.handle(error);
            return { success: false, code: "501", message };
        }
    }


    /**
     * Validamos los parametros antes de crear el history
     * @param {*} cronograma_id 
     * @param {*} input 
     */
    validateHistory = async (cronograma_id, input) => {
        try {
            let { meta_id, planilla_id, cargo_id, categoria_id } = input;
            // validamos que la meta exista
            let meta = await Meta.find(meta_id);
            if (!meta) throw new Error("La meta es invalida!");
            // validamos que planilla exista
            let planilla = await Planilla.find(planilla_id);
            if (!planilla) throw new Error("La planilla es invalida!");
            // validamos que el cargo sea válida
            let cargo = await Cargo.query()
                .where("planilla_id", planilla_id)
                .where("id", cargo_id)
                .first();
            if (!cargo) throw new Error("El cargo es invalido!");
            // validamos que la categoria se válida
            let categoria = await Categoria.find(categoria_id);
            if (!categoria) throw new Error("La categoria es invalida!");
            // validar cronograma
            let cronograma = await Cronograma.query()
                .where("activo", true)
                .where('planilla_id', planilla_id)
                .where('id', cronograma_id)
                .first();
            if (!cronograma) throw new Error("El cronograma no es válido!");
            return { success: true, message: "" };
        } catch (error) {
            let message = await ResponseException.handle(error);
            return { success: false, message };
        }
    }


}

module.exports = new HistoryResolver;