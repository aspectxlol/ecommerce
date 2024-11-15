import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./entity/Product"
import { Order } from "./entity/Order";
import { OrderItem } from "./entity/OrderItem";

export const AppDatasource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "ecommerce",
    synchronize: true,
    logging: false,
    entities: [Product, Order, OrderItem],
    migrations: [],
    subscribers: [],
});
