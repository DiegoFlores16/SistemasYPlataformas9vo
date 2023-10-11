import { Types } from 'mongoose';
export declare class CreateMembresiaDto {
    readonly membresiaID: string;
    readonly tipo: string;
    readonly costo: number;
    readonly duracion: number;
    readonly gymID: Types.ObjectId;
    readonly equipoID: Types.ObjectId;
}
