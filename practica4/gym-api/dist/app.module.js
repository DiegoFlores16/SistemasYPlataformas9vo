"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const clientes_module_1 = require("./clientes/clientes.module");
const mongoose_1 = require("@nestjs/mongoose");
const clientes_schema_1 = require("./schemas/clientes.schema");
const coaches_module_1 = require("./coaches/coaches.module");
const membresias_module_1 = require("./membresias/membresias.module");
const gym_module_1 = require("./gym/gym.module");
const clases_module_1 = require("./clases/clases.module");
const equipos_module_1 = require("./equipos/equipos.module");
const asistencias_module_1 = require("./asistencias/asistencias.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            clientes_module_1.ClientesModule,
            mongoose_1.MongooseModule.forRoot('mongodb+srv://gustavoemilio:admin123@cluster0.fvrbdh3.mongodb.net/?retryWrites=true&w=majority'),
            mongoose_1.MongooseModule.forFeature([{ name: clientes_schema_1.Clientes.name, schema: clientes_schema_1.ClientesSchema }]),
            coaches_module_1.CoachesModule,
            membresias_module_1.MembresiasModule,
            gym_module_1.GymModule,
            clases_module_1.ClasesModule,
            equipos_module_1.EquiposModule,
            asistencias_module_1.AsistenciasModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map