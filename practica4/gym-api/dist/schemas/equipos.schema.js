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
exports.EquipoSchema = exports.Equipos = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Equipos = class Equipos {
};
exports.Equipos = Equipos;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Equipos.prototype, "EquipoID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Equipos.prototype, "Nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Equipos.prototype, "Tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, ref: 'Gym', required: true }),
    __metadata("design:type", String)
], Equipos.prototype, "GymID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, ref: 'Clase', required: true }),
    __metadata("design:type", String)
], Equipos.prototype, "ClaseID", void 0);
exports.Equipos = Equipos = __decorate([
    (0, mongoose_1.Schema)()
], Equipos);
exports.EquipoSchema = mongoose_1.SchemaFactory.createForClass(Equipos);
//# sourceMappingURL=equipos.schema.js.map