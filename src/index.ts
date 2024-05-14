import appDataSource from "./data.source";
import express from "express";
import cors from "cors";
import productRouter from "./routes/ProductRoutes";

appDataSource.initialize().then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());


    app.use("/products", productRouter)

    app.listen(process.env.PORT, () => {
        console.log(`server is running on port ${process.env.PORT}`); 
    });
})