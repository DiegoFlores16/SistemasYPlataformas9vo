import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RecetaDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    identificacion:string;

    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    direccion:string;
    

    @IsString()
    @IsNotEmpty()
    telefono:string;

    @IsNumber()
    @IsNotEmpty()
    tipo: number;

}
