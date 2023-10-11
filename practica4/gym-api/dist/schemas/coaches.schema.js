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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachSchema = exports.Coaches = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Coaches = class Coaches {
};
exports.Coaches = Coaches;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Coaches.prototype, "CoachID", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Coaches.prototype, "Nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Coaches.prototype, "Especialidad", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, ref: 'Gym' }),
    __metadata("design:type", String)
], Coaches.prototype, "GymID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, ref: 'Membresia' }),
    __metadata("design:type", String)
], Coaches.prototype, "MembresiaID", void 0);
exports.Coaches = Coaches = __decorate([
    (0, mongoose_1.Schema)()
], Coaches);
exports.CoachSchema = mongoose_1.SchemaFactory.createForClass(Coaches);
//# sourceMappingURL=coaches.schema.js.map