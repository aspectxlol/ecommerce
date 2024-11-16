import 'reflect-metadata'
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, type Relation} from "typeorm"
import {OrderItem} from "./OrderItem";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    Name: string

    @Column("text")
    Description: string

    @Column("text")
    image: string

    @Column("text")
    price: number

    @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
    @JoinColumn()
    orderItems: Relation<OrderItem>[];
}
