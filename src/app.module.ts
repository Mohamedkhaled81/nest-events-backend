import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './event.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5433,
    username: 'postgres',
    password: 'password',
    database: 'mydb',
    entities: [Event],
    synchronize: true
  }), 
  TypeOrmModule.forFeature([Event])],
  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule {}
