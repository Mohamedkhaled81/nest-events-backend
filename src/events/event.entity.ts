import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Attendee } from "./attendee.entity";

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

    @OneToMany(() => Attendee, (attendee) => attendee.event)
    attendees: Attendee[];
}