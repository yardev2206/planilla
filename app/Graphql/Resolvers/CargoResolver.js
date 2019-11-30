'use strict';

const Cargo = use('App/Models/Cargo');
const Planilla = use('App/Models/Planilla');
const TypeCargo = use('App/Models/TypeCargo');
const slugify = require('slugify');

class CargoResolver {

    async getCargos(root, { page = 1, like }, { request }) {
        let planillas = Planilla.query();
        // filtrar
        if (like) planillas.where('descripcion', 'like', `%${like}%`);
        // obtener relaciones
        planillas = await planillas.paginate(page, 30);
        // obtener JSON
        return planillas.toJSON();
    }


    async createCargo(root, { input }, { request }) {
        try {
            // variables
            let { planilla_id, type_cargo_id } = input;
            // validamos planilla 
            let planilla = await Planilla.find(planilla_id);
            if (!planilla) throw new Error("La planilla es invalida!");
            // validar type_cargo
            let type_cargo = await TypeCargo.query()
                .where('planilla_id', planilla_id)
                .where('id', type_cargo_id)
                .first()
            if (!type_cargo) throw new Error("El cargo no existe o no pertenece a la planilla!");
            // crear slug
            input.slug = slugify(input.descripcion, { lower: true });
            // crear cargo
            await Cargo.create(input);
            return { success: true, code: "201", message: "El registro se guardo correctamente!" };
        } catch (error) {
            let message = error.sqlMessage ? error.sqlMessage : error.message;
            return { success: false, code: "501", message };
        }
    }

}

module.exports = new CargoResolver;