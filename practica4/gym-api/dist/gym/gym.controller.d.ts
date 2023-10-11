import { GymService } from './gym.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { Gym } from '../schemas/gym.schema';
export declare class GymController {
    private readonly gymService;
    constructor(gymService: GymService);
    create(createGymDto: CreateGymDto): Promise<Gym>;
    findAll(): Promise<Gym[]>;
    findOne(id: string): string;
    update(id: string, updateGymDto: UpdateGymDto): string;
    remove(id: string): string;
}
