import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm"
import {OrderItem} from "./OrderItem";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Name: string

    @Column()
    Description: string

    @Column()
    price: number

    @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
    @JoinColumn()
    orderItems: OrderItem[];
}
