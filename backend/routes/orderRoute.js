import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder, placeOrderCod } from '../controllers/orderController.js';

// Admin middleware for restricting access to certain routes
import adminMiddleware from '../middleware/admin.js';

const orderRouter = express.Router();

orderRouter.get("/list", listOrders);

orderRouter.post("/userorders", authMiddleware, userOrders);

orderRouter.post("/place", authMiddleware, placeOrder);

orderRouter.post("/update-status", authMiddleware, updateStatus);

orderRouter.post("/verify", verifyOrder);

orderRouter.post("/placecod", placeOrderCod);

export default orderRouter;
