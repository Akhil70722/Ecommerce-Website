import express from 'express';
import multer from 'multer';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import FoodModel from '../models/foodModel.js'; // ⬅️ Ensure this is the correct model

const foodRouter = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  }
});

const upload = multer({ storage });

foodRouter.get("/list", listFood);
foodRouter.post("/add", upload.single('image'), addFood);
foodRouter.post("/remove", removeFood);

foodRouter.get('/menu', (req, res) => {
  res.json({
    menu: ["breakfast", "lunch", "dinner", "snacks", "desserts"]
  });
});

foodRouter.get('/products', async (req, res) => {
  try {
    const products = await FoodModel.find(); // Replace with your DB call
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

export default foodRouter;
