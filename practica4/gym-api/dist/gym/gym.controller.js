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
exports.GymController = void 0;
const common_1 = require("@nestjs/common");
const gym_service_1 = require("./gym.service");
const create_gym_dto_1 = require("./dto/create-gym.dto");
const update_gym_dto_1 = require("./dto/update-gym.dto");
let GymController = class GymController {
    constructor(gymService) {
        this.gymService = gymService;
    }
    async create(createGymDto) {
        return this.gymService.create(createGymDto);
    }
    async findAll() {
        return this.gymService.findAll();
    }
    findOne(id) {
        return this.gymService.findOne(+id);
    }
    update(id, updateGymDto) {
        return this.gymService.update(+id, updateGymDto);
    }
    remove(id) {
        return this.gymService.remove(+id);
    }
};
exports.GymController = GymController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gym_dto_1.CreateGymDto]),
    __metadata("design:returntype", Promise)
], GymController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GymController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GymController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gym_dto_1.UpdateGymDto]),
    __metadata("design:returntype", void 0)
], GymController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GymController.prototype, "remove", null);
exports.GymController = GymController = __decorate([
    (0, common_1.Controller)('gym'),
    __metadata("design:paramtypes", [gym_service_1.GymService])
], GymController);
//# sourceMappingURL=gym.controller.js.map