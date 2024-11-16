import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./entity/Product.js"
import { Order } from "./entity/Order.js";
import { OrderItem } from "./entity/OrderItem.js";

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
