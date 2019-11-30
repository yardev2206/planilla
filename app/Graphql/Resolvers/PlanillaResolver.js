'use strict';

const Planilla = use('App/Models/Planilla');
const ResponseException = use('App/Exceptions/ResponseException');

class PlanillaResolver {

    async getPlanillas(root, { page = 1, like }, { request }) {
        let planillas = Planilla.query();
        // filtrar
        if (like) planillas.where('descripcion', 'like', `%${like}%`);
        // obtener relaciones
        planillas = await planillas.paginate(page, 30);
        // obtener JSON
        return planillas.toJSON();
    }


    async createPlanilla(root, { input }, { request }) {
        try {
            // crear trabajador
            await Planilla.create(input);
            return { success: true, code: "201", message: "El registro se guardo correctamente!" };
        } catch (error) {
            let message = ResponseException.handle(error);
            return { success: false, code: "501", message };
        }
    }

}

module.exports = new PlanillaResolver;