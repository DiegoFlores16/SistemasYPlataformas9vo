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
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const clientes_schema_1 = require("../schemas/clientes.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ClientesService = class ClientesService {
    constructor(clientesModel) {
        this.clientesModel = clientesModel;
    }
    async create(createClienteDto) {
        const createdCliente = new this.clientesModel(createClienteDto);
        return createdCliente.save();
    }
    async findAll() {
        return this.clientesModel.find().exec();
    }
    async findOne(nombre_cliente) {
        const cliente = await this.clientesModel.findOne({ nombre_cliente: nombre_cliente }).exec();
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente con nombre ${nombre_cliente} no encontrado.`);
        }
        return cliente;
    }
    async updateByNombre(nombre_cliente, updateData) {
        const updatedCliente = await this.clientesModel.findOneAndUpdate({ nombre_cliente: nombre_cliente }, updateData, { new: true }).exec();
        if (!updatedCliente) {
            throw new common_1.NotFoundException(`Cliente con nombre ${nombre_cliente} no encontrado.`);
        }
        return updatedCliente;
    }
    async deleteByNombre(nombre) {
        const result = await this.clientesModel.deleteOne({ nombre_cliente: nombre }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Cliente con nombre ${nombre} no encontrado.`);
        }
        return { message: 'Cliente eliminado con éxito' };
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(clientes_schema_1.Clientes.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClientesService);
//# sourceMappingURL=clientes.service.js.map