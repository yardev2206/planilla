'use strict';

const Planilla = use('App/Models/Planilla');
const Cronograma = use('App/Models/Cronograma');
const ResponseException = use('App/Exceptions/ResponseException');
const slugify = require('slugify');

class CrongoramaResolver
{

    async createCronograma(root, { input }) {
        try {
            let { planilla_id, dias, mes, adicional, observacion } = input;
            let year = new Date().getFullYear();
            // verificamos que la planilla sea valida!
            let planilla = await Planilla.find(planilla_id);
            if (!planilla) throw new Error("La planilla es invalida!");
            // verificamos que el dia sea valido
            if (mes < 0 || mes > 30) throw new Error("El mes es invalido!");
            // obtener year
            input.year = year;
            // verificamos si la planilla es adicional
            if (adicional) {
                // verificamos que exista una planilla no adicional
                let cronograma = await Cronograma.query()
                    .where('mes', mes)
                    .where('year', year)
                    .where('planilla_id', planilla_id)
                    .where('adicional', false)
                    .first();
                if (!cronograma) throw new Error("No se puede crear la planilla adicional");
                // obtenemos el numero del adicional
                let cronogramas = await Cronograma.query()
                    .where('year', year)
                    .where('mes', mes)
                    .where('adicional', adicional)
                    .fetch()
                // obtenemos ell numero
                let countCronograma = cronogramas.toJSON().length;
                input.numero = countCronograma + 1;
                // creamos cronograma adicional
                await Cronograma.create(input);
                return { success: true, code: "201", message: "Se creó correctamente la planilla adicional" }
            }
            // verificamos que el cronograma ya existe
            let existCronograma = await Cronograma.query()    
                .where('year', year)
                .where('mes', mes)
                .where('adicional', adicional ? 1 : 0)
                .first();
            if (existCronograma) throw new Error("El cronograma ya existe!");
            // creamos cronograma
            await Cronograma.create(input);
            return { success: true, code: "201", message: "La planilla se creó correctamente!" }   
        } catch (error) {
            let message = ResponseException.handle(error);
            return { success: false, code: "501", message }
        }
    }

}


module.exports = new CrongoramaResolver;