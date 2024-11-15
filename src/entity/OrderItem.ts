import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./Order";
import {Product} from "./Product";

@Entity()
export class OrderItem {

    @PrimaryGeneratedColumn()
    id: number;

    // Many-to-One relationship with Order (one order item belongs to one order)
    @ManyToOne(() => Order, (order) => order.orderItems)
    @JoinColumn({ name: "orderId" })
    order: Order;

    @Column()
    orderId: number; // Redundant field (optional for easier querying)

    // Many-to-One relationship with Product (one order item has one product)
    @ManyToOne(() => Product, (product) => product.orderItems)
    @JoinColumn({ name: "productId" })
    product: Product;

    @Column()
    productId: number; // Redundant field (optional for easier querying)

    @Column()
    quantity: number; // Quantity of the product in this order item
}