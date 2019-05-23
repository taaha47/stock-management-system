import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {PurchaseOrder} from "./PurchaseOrder.scheme";

@Entity({name: "supplier"})
export class Supplier {

  @PrimaryGeneratedColumn()
  supplier_id: number;

  @Column()
  supplier_company_name: string;

  @Column()
  supplier_tel: string;

  @Column()
  supplier_email: string;

  @OneToMany(type => PurchaseOrder, po => po.supplier)
  purchaseOrders: PurchaseOrder[];
}
