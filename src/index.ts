import express from "express";
import bodyParser from "body-parser";

import Products from "./routes/Products";
import Orders from "./routes/Orders";
import {AppDatasource} from "./data-source";

const app = express();
app.use(bodyParser.json());

app.use("/products", Products);
app.use("/orders", Orders);

AppDatasource.initialize().then(() => {
    console.log("Database connected");
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`
        Ecommerce server listening
        http://localhost:${port}
    `)
});