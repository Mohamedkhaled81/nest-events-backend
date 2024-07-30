import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Event } from "src/events/event.entity";

export default (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Event],
    synchronize: false
});