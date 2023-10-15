import express from 'express';
import {
  addOrderItems,
  getMyOrders,
  getOrderById
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems)

export default router