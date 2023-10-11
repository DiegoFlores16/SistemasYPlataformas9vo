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
exports.AsistenciaSchema = exports.Asistencia = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Asistencia = class Asistencia {
};
exports.Asistencia = Asistencia;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Asistencia.prototype, "AsistenciaID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Cliente', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Asistencia.prototype, "ClienteID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Clase', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Asistencia.prototype, "ClaseID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Asistencia.prototype, "Fecha", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Asistencia.prototype, "Hora", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Gym', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Asistencia.prototype, "GymID", void 0);
exports.Asistencia = Asistencia = __decorate([
    (0, mongoose_1.Schema)()
], Asistencia);
exports.AsistenciaSchema = mongoose_1.SchemaFactory.createForClass(Asistencia);
//# sourceMappingURL=asistencias.schema.js.map