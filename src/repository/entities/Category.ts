import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {Product} from ".";

@Entity({name: "category"})
export class Category {

    @PrimaryGeneratedColumn()
    category_id: number;

    @Column({"unique": true})
    category_code: string;

    @Column()
    category_name: string;

    @Column()
    category_description: string;

    @OneToMany(type => Product, product => product.category)
    products: Product[];
}
