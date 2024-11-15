import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {OrderItem} from "./OrderItem";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    CustomerName: string

    @Column()
    CustomerPhone: string

    @Column({ default: Date.now() })
    OrderDate: Date

    @Column()
    DeliveryDate: Date

    // One-to-Many relationship with OrderItem
    @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
    @JoinColumn()
    orderItems: OrderItem[];

    @Column()
    TotalPrice: number
}