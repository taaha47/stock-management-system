import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import {Supplier} from "./Supplier.scheme";
import {Product} from "./Product.scheme";

@Entity({name: "purchase_order"})
export class PurchaseOrder {

  @PrimaryGeneratedColumn()
  po_id: number;

  @Column()
  po_label: string;

  @Column()
  po_date: string;

  @ManyToOne(type => Supplier, supplier => supplier.purchaseOrders)
  supplier: number;

  @ManyToMany(type => Product)
  @JoinTable({name: "purchase_order_line"})
  products: Product[];
}
