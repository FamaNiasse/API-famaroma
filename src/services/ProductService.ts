import appDataSource from "../data.source";

class ProductService {
    async getAll() {
        console.log("ProductService");
        return appDataSource.query("SELECT * FROM produit");
        
    }
}

export default ProductService;