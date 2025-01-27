import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/api/products",productRoutes);

app.listen(PORT,() =>{
    connectDB();
    console.log('server started at http://localhost:5000 hello');
    
});
