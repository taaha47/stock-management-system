import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import {Article} from "./Article.scheme";

@Entity()
export class Stock {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: "1"})
    identifier: string;

    @Column({default: "stock base sur rabat"})
    description: string;

    @OneToOne(type => Article, article => article.stock)
    @JoinColumn()
    article: Article;

    @Column()
    quantity: number;

    @Column()
    unit: string;
}
