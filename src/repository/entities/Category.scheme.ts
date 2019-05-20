import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {Article} from "./Article.scheme";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(type => Article, article => article.category)
    articles: Article[];
}
