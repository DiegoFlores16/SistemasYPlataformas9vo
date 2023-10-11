import { CreateMembresiaDto } from './dto/create-membresia.dto';
import { UpdateMembresiaDto } from './dto/update-membresia.dto';
import { Model } from 'mongoose';
import { Membresia, MembresiasDocument } from '../schemas/membresias.schema';
export declare class MembresiasService {
    private readonly membresiaModel;
    constructor(membresiaModel: Model<MembresiasDocument>);
    create(createMembresiaDto: CreateMembresiaDto): Promise<MembresiasDocument>;
    findAll(): Promise<MembresiasDocument[]>;
    findOne(id: string): Promise<Membresia>;
    update(id: number, updateMembresiaDto: UpdateMembresiaDto): string;
    remove(id: number): string;
}
