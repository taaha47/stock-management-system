import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import {PurchaseOrder, Product} from ".";

@Entity({name: "purchase_order_line"})
export class PurchaseOrderLine {

    @PrimaryColumn({name: "po_id"})
    poId: number;

    @ManyToOne(type => PurchaseOrder, po => po.poLines)
    @JoinColumn({name: "po_id"})
    po: PurchaseOrder;

    @PrimaryColumn({name: "prd_id"})
    prdId: number;

    @ManyToOne(type => Product, prd => prd.poLines)
    @JoinColumn({name: "prd_id"})
    prd: Product;

    @Column()
    price: number;

    @Column()
    quantity: number;
}
