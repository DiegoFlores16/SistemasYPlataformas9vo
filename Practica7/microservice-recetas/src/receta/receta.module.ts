import { Module } from '@nestjs/common';
import { RecetaService } from './receta.service';
import { RecetaSchema } from './schema/receta.schema';
import { RECETA } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetaController } from './receta.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: RECETA.name,
        useFactory: () => RecetaSchema,
      },
    ]),
  ],
  controllers: [RecetaController],
  providers: [RecetaService],
})
export class RecetaModule {}