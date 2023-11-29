import { RecetaDTO } from './dto/receta.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RECETA } from 'src/common/models/models';
import { IReceta } from 'src/common/interfaces/receta.interface';

@Injectable()
export class RecetaService {
  constructor(@InjectModel(RECETA.name) private readonly model: Model<IReceta>) {}

  
  async create(recetaDTO: RecetaDTO): Promise<IReceta> {
    const newReceta = new this.model(recetaDTO);
    return await newReceta.save();
  }

  async findAll(): Promise<IReceta[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IReceta> {
    return await this.model.findById(id);
  }

  async update(id: string, recetaDTO: RecetaDTO): Promise<IReceta> {
    return await this.model.findByIdAndUpdate(id, recetaDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
