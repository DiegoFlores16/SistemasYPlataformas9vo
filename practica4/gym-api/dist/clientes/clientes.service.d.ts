/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Clientes } from '../schemas/clientes.schema';
import { Model } from 'mongoose';
export declare class ClientesService {
    private clientesModel;
    constructor(clientesModel: Model<Clientes>);
    create(createClienteDto: CreateClienteDto): Promise<Clientes>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Clientes> & Clientes & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(nombre_cliente: string): Promise<import("mongoose").Document<unknown, {}, Clientes> & Clientes & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateByNombre(nombre_cliente: string, updateData: Partial<Clientes>): Promise<Clientes>;
    deleteByNombre(nombre: string): Promise<{
        message: string;
    }>;
}
