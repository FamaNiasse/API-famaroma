import { Router } from "express";
import ProductController from "../controllers/ProductController";

const productRouter = Router();

const productController = new ProductController();

productRouter.get("/", (req,res) => {
    console.log("ProductRouter");
    productController.getAll(req,res); 
})

export default productRouter;