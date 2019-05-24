import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import {Command, Product} from ".";

@Entity({name: "command_line"})
export class CommandLine {

    @PrimaryColumn({name: "cmd_id"})
    poId: number;

    @ManyToOne(type => Command, cmd => cmd.cmdLines)
    @JoinColumn({name: "cmd_id"})
    cmd: Command;

    @PrimaryColumn({name: "prd_id"})
    prdId: number;

    @ManyToOne(type => Product, prd => prd.cmdLines)
    @JoinColumn({name: "prd_id"})
    prd: Product;

    @Column()
    price: number;

    @Column()
    quantity: number;
}
