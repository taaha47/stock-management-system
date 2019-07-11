import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import {Category, PurchaseOrderLine, CommandLine} from ".";

@Entity({name: "product"})
export class Product {

    @PrimaryGeneratedColumn()
    product_id: number;

    @Column({unique: true})
    product_code: string;

    @Column()
    product_name: string;

    @Column()
    product_packaging: string;

    @Column()
    product_description: string;

    @ManyToOne(type => Category, category => category.products, {eager: true})
    @JoinColumn({name: "category_id"})
    category: Category;

    @OneToMany(type => PurchaseOrderLine, poLine => poLine.prd)
    poLines: PurchaseOrderLine[];

    @OneToMany(type => CommandLine, cmdLine => cmdLine.cmd)
    cmdLines: CommandLine[];
}
