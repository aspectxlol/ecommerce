import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`
        Ecommerce server listening
        http://localhost:${port}
    `)
});