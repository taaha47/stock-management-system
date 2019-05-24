import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm';
import {Client, CommandLine} from ".";

@Entity({name: "command"})
export class Command {

    @PrimaryGeneratedColumn()
    po_id: number;

    @Column()
    po_label: string;

    @Column()
    po_date: Date;

    @ManyToOne(type => Client, supplier => supplier.commands)
    client: Client;

    @OneToMany(type => CommandLine, cmdLine => cmdLine.cmd)
    cmdLines: CommandLine[]

}
