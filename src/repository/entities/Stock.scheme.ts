import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import {Product} from "./Product.scheme";

@Entity({name: "stock"})
export class Stock {

    @PrimaryGeneratedColumn()
    stk_id: number;

    @Column({default: "none"})
    stk_code: string;

    @OneToOne(type => Product)
    @JoinColumn()
    product: Product;

    @Column()
    stk_quantity: number;
}
