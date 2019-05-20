import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne} from 'typeorm';
import {Category} from "./Category.scheme";
import {Stock} from "./Stock.scheme";

@Entity()
export class Article {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(type => Category, category => category.articles)
    category: Category;

    @OneToOne(type => Stock, stock => stock.article)
    stock: Stock;
}
