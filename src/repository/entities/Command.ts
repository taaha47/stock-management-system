import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {Client, CommandLine} from ".";

@Entity({name: "command"})
export class Command {

    @PrimaryGeneratedColumn()
    po_id: number;

    @Column()
    po_label: string;

    @CreateDateColumn({type: "date"})
    createdAt: Date;

    @UpdateDateColumn({type: "date"})
    updatedAt: Date;

    @ManyToOne(type => Client, supplier => supplier.commands)
    client: Client;

    @OneToMany(type => CommandLine, cmdLine => cmdLine.cmd)
    cmdLines: CommandLine[]

}
