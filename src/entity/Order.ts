import 'reflect-metadata'
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,
    type Relation,
    UpdateDateColumn
} from "typeorm";
import {OrderItem} from "./OrderItem";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    CustomerName: string

    @Column("text")
    CustomerPhone: string

    @Column("date")
    DeliveryDate: Date

    // One-to-Many relationship with OrderItem
    @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
    @JoinColumn()
    orderItems: Relation<OrderItem>[];

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}