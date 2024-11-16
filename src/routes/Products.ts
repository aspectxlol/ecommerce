import {Request, Response, Router} from "express";
import {Product} from "../entity/Product";
import {AppDatasource} from "../data-source";

const productRepository = AppDatasource.getRepository(Product);

const router = Router();

router.post("/", (req: Request, res: Response) => {
    const newProduct = new Product();
    newProduct.Name = req.body.name;
    newProduct.Description = req.body.description;
    newProduct.price = req.body.price;
    newProduct.image = '';

    productRepository.save(newProduct).then((product) => {
        res.send(product);
    }).catch((err) => {
        res.status(500).send(err);
        console.log(err);
    })
});

router.get("/", (req: Request, res: Response) => {
    productRepository.find().then((products) => {
        res.send(products);
    })
});

router.put("/:id", async (req: Request, res) => {
    try {
        const { id } = req.params;
        const { name, price, description } = req.body;

        const product = await productRepository.findOne({ where: { id: Number(id) } });

        if (!product) {
            res.status(404).send("Product not found");
            return;
        }

        product.Name = name;
        product.Description = description;
        product.price = price;

        await productRepository.save(product);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Find the product to be deleted
        // const product = await Product.findByPk(id);
        const product = await productRepository.findOne({ where: { id: Number(id) } });

        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }

        await productRepository.delete(product)

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);

        res.status(500).json({ error: 'Internal Server Error' });
    }
});


export default router;