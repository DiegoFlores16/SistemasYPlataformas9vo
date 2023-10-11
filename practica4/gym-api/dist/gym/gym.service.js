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
exports.GymService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const gym_schema_1 = require("../schemas/gym.schema");
const mongoose_2 = require("mongoose");
let GymService = class GymService {
    constructor(gymModel) {
        this.gymModel = gymModel;
    }
    async create(createGymDto) {
        const createdGym = new this.gymModel(createGymDto);
        return createdGym.save();
    }
    async findAll() {
        return this.gymModel.find().exec();
    }
    findOne(id) {
        return `This action returns a #${id} gym`;
    }
    update(id, updateGymDto) {
        return `This action updates a #${id} gym`;
    }
    remove(id) {
        return `This action removes a #${id} gym`;
    }
};
exports.GymService = GymService;
exports.GymService = GymService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(gym_schema_1.Gym.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], GymService);
//# sourceMappingURL=gym.service.js.map