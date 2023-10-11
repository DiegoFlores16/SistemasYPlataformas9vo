import { AsistenciasService } from './asistencias.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { Asistencia } from '../schemas/asistencias.schema';
export declare class AsistenciasController {
    private readonly asistenciasService;
    constructor(asistenciasService: AsistenciasService);
    findAll(): Promise<Asistencia[]>;
    create(createAsistenciaDto: CreateAsistenciaDto): Promise<Asistencia>;
    findOne(id: string): string;
    update(id: string, updateAsistenciaDto: UpdateAsistenciaDto): string;
    remove(id: string): string;
}
