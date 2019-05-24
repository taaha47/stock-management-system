import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Command } from ".";

@Entity({name: "client"})
export class Client {

    @PrimaryGeneratedColumn()
    client_id: number;

    @Column()
    client_company_name: string;

    @Column()
    client_tel: string;

    @Column()
    client_email: string;

    @OneToMany(type => Command, cmd => cmd.client)
    commands: Command[];
}
