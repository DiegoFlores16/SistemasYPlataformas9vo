import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { Asistencia, AsistenciaDocument } from '../schemas/asistencias.schema';
import { Model } from 'mongoose';
export declare class AsistenciasService {
    private asistenciaModel;
    constructor(asistenciaModel: Model<AsistenciaDocument>);
    findAll(): Promise<Asistencia[]>;
    create(createAsistenciaDto: CreateAsistenciaDto): Promise<Asistencia>;
    findOne(id: number): string;
    update(id: number, updateAsistenciaDto: UpdateAsistenciaDto): string;
    remove(id: number): string;
}
