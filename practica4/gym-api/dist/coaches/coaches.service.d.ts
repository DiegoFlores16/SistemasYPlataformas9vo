import { Coaches } from '../schemas/coaches.schema';
import { Model } from 'mongoose';
import { Coach } from './entities/coach.entity';
export declare class CoachesService {
    private coachesModel;
    constructor(coachesModel: Model<Coaches>);
    create(coachData: Coach): Promise<Coach>;
    findAll(): Promise<Coach[]>;
    findOne(coachNombre: string): Promise<Coach>;
    patchByNames(coachNombre: string, coachApellido: string, updateData: any): Promise<Coach>;
    deleteByNames(coachNombre: string, coachApellido: string): Promise<{
        message: string;
    }>;
}
