import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { Gym, GymDocument } from '../schemas/gym.schema';
import { Model } from 'mongoose';
export declare class GymService {
    private gymModel;
    constructor(gymModel: Model<GymDocument>);
    create(createGymDto: CreateGymDto): Promise<Gym>;
    findAll(): Promise<Gym[]>;
    findOne(id: number): string;
    update(id: number, updateGymDto: UpdateGymDto): string;
    remove(id: number): string;
}
