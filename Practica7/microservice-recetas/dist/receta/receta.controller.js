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
exports.RecetaController = void 0;
const receta_service_1 = require("./receta.service");
const receta_dto_1 = require("./dto/receta.dto");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const constants_1 = require("../common/constants");
let RecetaController = class RecetaController {
    constructor(recetaService) {
        this.recetaService = recetaService;
    }
    create(recetaDTO) {
        return this.recetaService.create(recetaDTO);
    }
    findAll() {
        return this.recetaService.findAll();
    }
    findOne(id) {
        return this.recetaService.findOne(id);
    }
    update(payload) {
        return this.recetaService.update(payload.id, payload.recetaDTO);
    }
    delete(id) {
        return this.recetaService.delete(id);
    }
};
exports.RecetaController = RecetaController;
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.RecetaMsg.CREATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receta_dto_1.RecetaDTO]),
    __metadata("design:returntype", void 0)
], RecetaController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.RecetaMsg.FIND_ALL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecetaController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.RecetaMsg.FIND_ONE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecetaController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.RecetaMsg.UPDATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RecetaController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.RecetaMsg.DELETE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecetaController.prototype, "delete", null);
exports.RecetaController = RecetaController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [receta_service_1.RecetaService])
], RecetaController);
//# sourceMappingURL=receta.controller.js.map