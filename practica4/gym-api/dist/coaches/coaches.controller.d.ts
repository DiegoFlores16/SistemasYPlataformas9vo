import { CoachesService } from './coaches.service';
import { Coach } from './entities/coach.entity';
export declare class CoachesController {
    private readonly coachesService;
    constructor(coachesService: CoachesService);
    create(createCoachDto: any): Promise<Coach>;
    findAll(): Promise<Coach[]>;
    findOne(coachNombre: string): Promise<Coach>;
    patch(coachNombre: string, coachApellido: string, updateData: any): Promise<Coach>;
    delete(coachNombre: string, coachApellido: string): Promise<{
        message: string;
    }>;
}
