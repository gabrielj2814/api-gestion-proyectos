import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {config} from "dotenv"
import {resolve} from "path"

config({ path:resolve(__dirname, "../.env") })

const {
  NODE_ENV,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_PRODUCION,
  DB_TEST,
  DB_DEV
} = process.env


let DB = (NODE_ENV === "producion") ? DB_PRODUCION : (NODE_ENV === "test") ? DB_TEST : DB_DEV
console.log("node env => ",DB)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: DB_HOST,
      port: parseInt(DB_PORT),
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB,
      autoLoadEntities:true,
      synchronize: true
    }),
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
