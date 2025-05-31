// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import userRouter from "./routes/userRoute.js";
// import foodRouter from "./routes/foodRoute.js";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";
// import helpandsupportRouter from "./routes/helpAndSupportRoutes.js";
// import deliveryPartnerRouter from "./routes/deliveryPartnerRoute.js"; // Import delivery partner routes
// import 'dotenv/config';

// // app config
// const app = express();
// const port = process.env.PORT || 4000;

// // middlewares
// app.use(express.json());

// // Updated CORS setup
// app.use(cors({
//   origin: [
//     'http://localhost:5174', 
//     'https://food-delivery-ml-sales-prediction.vercel.app'
//   ]
// }));

// // db connection
// connectDB();

// // api endpoints
// app.use("/api/user", userRouter);
// app.use("/api/food", foodRouter);
// app.use("/images", express.static("uploads"));
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);
// app.use("/api/delivery-partner", deliveryPartnerRouter);
// app.use('/api/help-support', helpandsupportRouter);

// app.get("/", (req, res) => {
//     res.send("API Working");
// });

// app.listen(port, () => console.log(`Server started on http://localhost:${port}`));



// import express from "express";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import userRouter from "./routes/userRoute.js";
// import foodRouter from "./routes/foodRoute.js";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";
// import helpandsupportRouter from "./routes/helpAndSupportRoutes.js";
// import deliveryPartnerRouter from "./routes/deliveryPartnerRoute.js";
// import 'dotenv/config';

// // App config
// const app = express();
// const port = process.env.PORT || 4000;

// // Middleware to parse JSON
// app.use(express.json());

// // ✅ Correct CORS setup
// app.use(cors({
//   origin: [
//     'http://localhost:5173',
//     'http://localhost:5174',
//     'https://food-delivery-ml-sales-prediction.vercel.app'
//   ],
//   credentials: true // Allow credentials (cookies, tokens)
// })); 

// // Connect DB
// connectDB();

// // API endpoints
// app.use("/api/user", userRouter);
// app.use("/api/food", foodRouter);
// app.use("/images", express.static("uploads"));
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);
// app.use("/api/delivery-partner", deliveryPartnerRouter);
// app.use("/api/help-support", helpandsupportRouter);

// // Test route
// app.get("/", (req, res) => {
//   res.send("API Working");
// });

// // Start server
// app.listen(port, () => console.log(`Server running on http://localhost:${port}`));




import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import helpandsupportRouter from "./routes/helpAndSupportRoutes.js";
import deliveryPartnerRouter from "./routes/deliveryPartnerRoute.js";
import 'dotenv/config';

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware to parse JSON
app.use(express.json());

// ✅ Correct CORS setup
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
    'https://ecommerce-ml-sales-prediction.vercel.app' // updated deployment URL
  ],
  credentials: true // Allow credentials (cookies, tokens)
})); 

// Connect DB
connectDB();

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter); // renamed from /api/food
app.use("/images", express.static("uploads"));
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/delivery-partner", deliveryPartnerRouter);
app.use("/api/help-support", helpandsupportRouter);

// Test route
app.get("/", (req, res) => {
  res.send("E-Commerce API Working");
});

// Start server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
