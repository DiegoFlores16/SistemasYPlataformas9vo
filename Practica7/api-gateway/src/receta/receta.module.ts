import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { RecetaController } from './receta.controller';

@Module({
  imports: [ProxyModule],
  controllers: [RecetaController],
})
export class RecetaModule {}
