import { RecetaService } from './receta.service';
import { RecetaDTO } from './dto/receta.dto';
export declare class RecetaController {
    private readonly recetaService;
    constructor(recetaService: RecetaService);
    create(recetaDTO: RecetaDTO): Promise<import("../common/interfaces/receta.interface").IReceta>;
    findAll(): Promise<import("../common/interfaces/receta.interface").IReceta[]>;
    findOne(id: string): Promise<import("../common/interfaces/receta.interface").IReceta>;
    update(payload: any): Promise<import("../common/interfaces/receta.interface").IReceta>;
    delete(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
