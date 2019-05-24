import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import {Category, PurchaseOrderLine, CommandLine} from ".";

@Entity({name: "product"})
export class Product {

    @PrimaryGeneratedColumn()
    prd_id: number;

    @Column()
    prd_name: string;

    @Column()
    prd_packaging: string;

    @Column()
    prd_description: string;

    @ManyToOne(type => Category, category => category.products)
    category: Category;

    @OneToMany(type => PurchaseOrderLine, poLine => poLine.prd)
    poLines: PurchaseOrderLine[];

    @OneToMany(type => CommandLine, cmdLine => cmdLine.cmd)
    cmdLines: CommandLine[];
}
