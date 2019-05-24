import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm';
import {Supplier, Product} from ".";
import { PurchaseOrderLine } from ".";

@Entity({name: "purchase_order"})
export class PurchaseOrder {

  @PrimaryGeneratedColumn()
  po_id: number;

  @Column()
  po_label: string;

  @Column()
  po_date: string;

  @ManyToOne(type => Supplier, supplier => supplier.purchaseOrders)
  supplier: Supplier;

  @OneToMany(type => PurchaseOrderLine, poLine => poLine.po)
  poLines: PurchaseOrderLine[]

}
