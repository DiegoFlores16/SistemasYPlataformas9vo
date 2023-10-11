"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembresiasModule = void 0;
const common_1 = require("@nestjs/common");
const membresias_service_1 = require("./membresias.service");
const membresias_controller_1 = require("./membresias.controller");
const mongoose_1 = require("@nestjs/mongoose");
const gym_module_1 = require("../gym/gym.module");
const membresias_schema_1 = require("../schemas/membresias.schema");
let MembresiasModule = class MembresiasModule {
};
exports.MembresiasModule = MembresiasModule;
exports.MembresiasModule = MembresiasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://gustavoemilio:admin123@cluster0.fvrbdh3.mongodb.net/?retryWrites=true&w=majority'),
            mongoose_1.MongooseModule.forFeature([{ name: membresias_schema_1.Membresia.name, schema: membresias_schema_1.MembresiaSchema }]),
            gym_module_1.GymModule,
        ],
        controllers: [membresias_controller_1.MembresiasController],
        providers: [membresias_service_1.MembresiasService],
        exports: [MembresiasModule],
    })
], MembresiasModule);
//# sourceMappingURL=membresias.module.js.map