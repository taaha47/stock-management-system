import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne} from 'typeorm';
import {Category} from "./Category.scheme";

@Entity()
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
