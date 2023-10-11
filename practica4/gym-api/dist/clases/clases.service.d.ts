import { UpdateClaseDto } from './dto/update-clase.dto';
import { Clase } from '../schemas/clases.schema';
import { Model } from 'mongoose';
export declare class ClasesService {
    private readonly claseModel;
    constructor(claseModel: Model<any>);
    create(createClaseDto: any): Promise<any>;
    findAll(): Promise<Clase[]>;
    findOne(id: number): string;
    update(id: number, updateClaseDto: UpdateClaseDto): string;
    remove(id: number): string;
}
