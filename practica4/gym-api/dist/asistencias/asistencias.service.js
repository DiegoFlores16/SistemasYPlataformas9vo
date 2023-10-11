"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsistenciasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const asistencias_schema_1 = require("../schemas/asistencias.schema");
const mongoose_2 = require("mongoose");
let AsistenciasService = class AsistenciasService {
    constructor(asistenciaModel) {
        this.asistenciaModel = asistenciaModel;
    }
    async findAll() {
        return this.asistenciaModel.find().exec();
    }
    async create(createAsistenciaDto) {
        const createdAsistencia = new this.asistenciaModel(createAsistenciaDto);
        return createdAsistencia.save();
    }
    findOne(id) {
        return `This action returns a #${id} asistencia`;
    }
    update(id, updateAsistenciaDto) {
        return `This action updates a #${id} asistencia`;
    }
    remove(id) {
        return `This action removes a #${id} asistencia`;
    }
};
exports.AsistenciasService = AsistenciasService;
exports.AsistenciasService = AsistenciasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(asistencias_schema_1.Asistencia.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AsistenciasService);
//# sourceMappingURL=asistencias.service.js.map