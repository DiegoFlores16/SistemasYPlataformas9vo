"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClasesModule = void 0;
const common_1 = require("@nestjs/common");
const clases_service_1 = require("./clases.service");
const clases_controller_1 = require("./clases.controller");
const mongoose_1 = require("@nestjs/mongoose");
const clases_schema_1 = require("../schemas/clases.schema");
const coaches_module_1 = require("../coaches/coaches.module");
const membresias_module_1 = require("../membresias/membresias.module");
let ClasesModule = class ClasesModule {
};
exports.ClasesModule = ClasesModule;
exports.ClasesModule = ClasesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://gustavoemilio:admin123@cluster0.fvrbdh3.mongodb.net/?retryWrites=true&w=majority'),
            mongoose_1.MongooseModule.forFeature([{ name: clases_schema_1.Clase.name, schema: clases_schema_1.ClaseSchema }]),
            coaches_module_1.CoachesModule,
            membresias_module_1.MembresiasModule
        ],
        controllers: [clases_controller_1.ClasesController],
        providers: [clases_service_1.ClasesService, coaches_module_1.CoachesModule, membresias_module_1.MembresiasModule],
    })
], ClasesModule);
//# sourceMappingURL=clases.module.js.map