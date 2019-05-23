import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import {Product} from "./Product.scheme";

@Entity()
export class Stock {

    @PrimaryGeneratedColumn()
    stk_id: number;

    @Column({default: "none"})
    stk_code: string;

    @OneToOne(type => Product)
    @JoinColumn()
    article: Product;

    @Column()
    stk_quantity: number;
}
