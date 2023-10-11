"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachesModule = void 0;
const common_1 = require("@nestjs/common");
const coaches_service_1 = require("./coaches.service");
const coaches_controller_1 = require("./coaches.controller");
const mongoose_1 = require("@nestjs/mongoose");
const coaches_schema_1 = require("../schemas/coaches.schema");
let CoachesModule = class CoachesModule {
};
exports.CoachesModule = CoachesModule;
exports.CoachesModule = CoachesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://gustavoemilio:admin123@cluster0.fvrbdh3.mongodb.net/?retryWrites=true&w=majority'),
            mongoose_1.MongooseModule.forFeature([{ name: coaches_schema_1.Coaches.name, schema: coaches_schema_1.CoachSchema }])
        ],
        controllers: [coaches_controller_1.CoachesController],
        providers: [coaches_service_1.CoachesService],
        exports: [CoachesModule],
    })
], CoachesModule);
//# sourceMappingURL=coaches.module.js.map