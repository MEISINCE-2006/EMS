import express from "express";
import { getLeaves, addLeave, getLeave, updateLeave } from "../controllers/leaveController.js";
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getLeaves);
router.post('/add', authMiddleware, addLeave);
router.get('/:id', authMiddleware, getLeave);
router.put('/:id', authMiddleware, updateLeave);

export default router;
