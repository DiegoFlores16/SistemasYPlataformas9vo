import { EquiposService } from './equipos.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipos } from '../schemas/equipos.schema';
export declare class EquiposController {
    private readonly equiposService;
    constructor(equiposService: EquiposService);
    findAll(): Promise<Equipos[]>;
    create(createEquipoDto: CreateEquipoDto): Promise<Equipos>;
    findOne(id: string): string;
    update(id: string, updateEquipoDto: UpdateEquipoDto): string;
    remove(id: string): string;
}
