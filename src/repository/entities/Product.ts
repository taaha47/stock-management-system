import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne} from 'typeorm';
import {Category} from ".";

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
}
