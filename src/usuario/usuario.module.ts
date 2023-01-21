import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { usuario } from './entitis/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([usuario])
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule {}
