import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Model } from 'mongoose';
import { Equipos } from '../schemas/equipos.schema';
export declare class EquiposService {
    private equipoModel;
    constructor(equipoModel: Model<Equipos>);
    findAll(): Promise<Equipos[]>;
    create(createEquipoDto: CreateEquipoDto): Promise<Equipos>;
    findOne(id: number): string;
    update(id: number, updateEquipoDto: UpdateEquipoDto): string;
    remove(id: number): string;
}
