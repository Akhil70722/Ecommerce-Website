// import express from 'express';
// import { addFood, listFood, removeFood } from '../controllers/foodController.js';
// import multer from 'multer';
// const foodRouter = express.Router();

// //Image Storage Engine (Saving Image to uploads folder & rename it)

// const storage = multer.diskStorage({
//     destination: 'uploads',
//     filename: (req, file, cb) => {
//         return cb(null,`${Date.now()}${file.originalname}`);
//     }
// })

// const upload = multer({ storage: storage})

// foodRouter.get("/list",listFood);
// foodRouter.post("/add",upload.single('image'),addFood);
// foodRouter.post("/remove",removeFood);

// export default foodRouter;


import express from 'express';
import { addProduct, listProducts, removeProduct } from '../controllers/productController.js';
import multer from 'multer';
import ProductModel from '../models/productModel.js'; // Ensure this is the correct model

const productRouter = express.Router();

// Image Storage Engine (Saving Image to uploads folder & renaming it)
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Existing routes for products
productRouter.get("/list", listProducts);  // Get list of products
productRouter.post("/add", upload.single('image'), addProduct);  // Add new product
productRouter.post("/remove", removeProduct);  // Remove a product

export default productRouter;
