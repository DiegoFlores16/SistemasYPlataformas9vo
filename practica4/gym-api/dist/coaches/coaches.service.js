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
exports.CoachesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const coaches_schema_1 = require("../schemas/coaches.schema");
const mongoose_2 = require("mongoose");
let CoachesService = class CoachesService {
    constructor(coachesModel) {
        this.coachesModel = coachesModel;
    }
    async create(coachData) {
        const newCoach = new this.coachesModel(coachData);
        return newCoach.save();
    }
    async findAll() {
        return this.coachesModel.find().exec();
    }
    async findOne(coachNombre) {
        const coach = await this.coachesModel.findOne({ coach_nombre: coachNombre }).exec();
        if (!coach) {
            throw new common_1.NotFoundException(`Coach con nombre "${coachNombre}" no encontrado.`);
        }
        return coach;
    }
    async patchByNames(coachNombre, coachApellido, updateData) {
        const updatedCoach = await this.coachesModel.findOneAndUpdate({ coach_nombre: coachNombre, coach_apellido: coachApellido }, updateData, { new: true }).exec();
        if (!updatedCoach) {
            throw new common_1.NotFoundException(`Coach con nombre "${coachNombre}" y apellido "${coachApellido}" no encontrado.`);
        }
        return updatedCoach;
    }
    async deleteByNames(coachNombre, coachApellido) {
        const result = await this.coachesModel.deleteOne({ coach_nombre: coachNombre, coach_apellido: coachApellido }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Coach con nombre "${coachNombre}" y apellido "${coachApellido}" no encontrado.`);
        }
        return { message: `Coach con nombre "${coachNombre}" y apellido "${coachApellido}" ha sido eliminado correctamente.` };
    }
};
exports.CoachesService = CoachesService;
exports.CoachesService = CoachesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(coaches_schema_1.Coaches.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CoachesService);
//# sourceMappingURL=coaches.service.js.map