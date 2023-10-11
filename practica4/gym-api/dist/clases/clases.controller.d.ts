import { ClasesService } from './clases.service';
import { UpdateClaseDto } from './dto/update-clase.dto';
import { Clase } from '../schemas/clases.schema';
export declare class ClasesController {
    private readonly clasesService;
    constructor(clasesService: ClasesService);
    create(createClaseDto: any): Promise<any>;
    findAll(): Promise<Clase[]>;
    findOne(id: string): string;
    update(id: string, updateClaseDto: UpdateClaseDto): string;
    remove(id: string): string;
}
