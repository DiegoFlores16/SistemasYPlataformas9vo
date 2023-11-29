import { RecetaService } from './receta.service';
import { RecetaDTO } from './dto/receta.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RecetaMsg } from 'src/common/constants';

@Controller()
export class RecetaController {
  constructor(private readonly recetaService: RecetaService) {}

  @MessagePattern(RecetaMsg.CREATE)
  create(@Payload() recetaDTO: RecetaDTO) {
    return this.recetaService.create(recetaDTO);
  }

  @MessagePattern(RecetaMsg.FIND_ALL)
  findAll() {
    return this.recetaService.findAll();
  }

  @MessagePattern(RecetaMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.recetaService.findOne(id);
  }
  @MessagePattern(RecetaMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.recetaService.update(payload.id, payload.recetaDTO);
  }

  @MessagePattern(RecetaMsg.DELETE)
  delete(@Payload() id: string) {
    return this.recetaService.delete(id);
  }
}
