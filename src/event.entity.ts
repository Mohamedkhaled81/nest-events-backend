import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('event')
export class Event {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({length: 100})
    name: string;

    @Column()
    when: Date;

    @Column()
    address: string;

    @Column()
    description: string;
}