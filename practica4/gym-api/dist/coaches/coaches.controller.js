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
exports.CoachesController = void 0;
const common_1 = require("@nestjs/common");
const coaches_service_1 = require("./coaches.service");
let CoachesController = class CoachesController {
    constructor(coachesService) {
        this.coachesService = coachesService;
    }
    async create(createCoachDto) {
        return this.coachesService.create(createCoachDto);
    }
    async findAll() {
        return this.coachesService.findAll();
    }
    async findOne(coachNombre) {
        return this.coachesService.findOne(coachNombre);
    }
    async patch(coachNombre, coachApellido, updateData) {
        return this.coachesService.patchByNames(coachNombre, coachApellido, updateData);
    }
    async delete(coachNombre, coachApellido) {
        return this.coachesService.deleteByNames(coachNombre, coachApellido);
    }
};
exports.CoachesController = CoachesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoachesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoachesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':nombre'),
    __param(0, (0, common_1.Param)('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoachesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':nombre/:apellido'),
    __param(0, (0, common_1.Param)('nombre')),
    __param(1, (0, common_1.Param)('apellido')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], CoachesController.prototype, "patch", null);
__decorate([
    (0, common_1.Delete)(':nombre/:apellido'),
    __param(0, (0, common_1.Param)('nombre')),
    __param(1, (0, common_1.Param)('apellido')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CoachesController.prototype, "delete", null);
exports.CoachesController = CoachesController = __decorate([
    (0, common_1.Controller)('coaches'),
    __metadata("design:paramtypes", [coaches_service_1.CoachesService])
], CoachesController);
//# sourceMappingURL=coaches.controller.js.map