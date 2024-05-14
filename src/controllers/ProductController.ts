import { Request, Response } from "express";
import ProductService from "../services/ProductService";

class ProductController {

    private productService =new ProductService();

    async getAll(req: Request, res: Response) {
        console.log("ProductController");
        const products = await this.productService.getAll();
        res.send({ status : "ok", data : products})
        
    }
}
export default ProductController;