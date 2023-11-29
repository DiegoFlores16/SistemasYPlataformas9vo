import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { RecetaMSG } from './../common/constants';
import { Observable } from 'rxjs';
import { RecetaDTO } from './dto/receta.dto';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { IReceta } from 'src/common/interfaces/receta.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('recetas')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/receta')
export class RecetaController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyReceta = this.clientProxy.clientProxyRecetas();

  @Post()
  create(@Body() recetaDTO: RecetaDTO): Observable<IReceta> {
    return this._clientProxyReceta.send(RecetaMSG.CREATE, recetaDTO);
  }

  @Get()
  findAll(): Observable<IReceta[]> {
    return this._clientProxyReceta.send(RecetaMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IReceta> {
    return this._clientProxyReceta.send(RecetaMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() recetaDTO: RecetaDTO): Observable<IReceta> {
    return this._clientProxyReceta.send(RecetaMSG.UPDATE, { id, recetaDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyReceta.send(RecetaMSG.DELETE, id);
  }
}
