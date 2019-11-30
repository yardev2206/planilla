'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class History extends Model {

    /**
     * Actualiza el total bruto
     */
    updateRemuneracion = async (history, remuneraciones) => {
        let total_bruto = await remuneraciones.sum("monto");
        let total_neto = total_bruto - history.total_descuentos;
        history.update({total_bruto, total_neto});    
        return history;
    }

    /**
     * Actualizar el total de descuento
     */
    updateDescuento = async (history, descuentos) => {
        let total_descuentos = await descuentos.sum("monto");
        let total_neto = history.total_bruto - total_descuentos;
        history.update({total_descuentos, total_neto});
        return history;
    }

    /**
     * Actualizar el total de aporte
     */
    updateAporte = async (history, aportes) => {
        let total_aportes = await aportes.sum("monto");
        history.update({total_aportes});
        return history; 
    }

}

module.exports = History
