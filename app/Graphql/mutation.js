// registrar la mutaciones de la aplicacion
const MetaResolver = require('./Resolvers/MetaResolver');
const PlanillaResolver = require('./Resolvers/PlanillaResolver');
const CargoResolver = require('./Resolvers/CargoResolver');
const CategoriaResolver = require('./Resolvers/CategoriaResolver');
const HistoryResolver = require('./Resolvers/HistoryResolver');
const TypeCargoResolver = require('./Resolvers/TypeCargoResolver');
const CronogramaResolver = require('./Resolvers/CronogramaResolver');
const TypeRemuneracionResolver = require('./Resolvers/TypeRemuneracionResolver');
const RemuneracionResolver = require('./Resolvers/RemuneracionResolver');
const TypeConceptoResolver = require('./Resolvers/TypeConceptoResolver');
const ConceptoResolver = require('./Resolvers/ConceptoResolver');


module.exports = {
    createMeta: MetaResolver.createMeta,
    createPlanilla: PlanillaResolver.createPlanilla,
    createCargo: CargoResolver.createCargo,
    createCategoria: CategoriaResolver.createCategoria,
    createHistory: HistoryResolver.createHistory,
    createHistories: HistoryResolver.createHistories,
    createTypeCargo: TypeCargoResolver.createTypeCargo,
    createCronograma: CronogramaResolver.createCronograma,
    createTypeRemuneracion: TypeRemuneracionResolver.createTypeRemuneracion,
    createRemuneracion: RemuneracionResolver.createRemuneracion,
    createTypeConcepto: TypeConceptoResolver.createTypeConcepto,
    createConcepto: ConceptoResolver.createConcepto,
}