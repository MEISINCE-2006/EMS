 import express from "express";
import { getSalaries, addSalary, getSalary } from "../controllers/salaryController.js";
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get("/", authMiddleware, getSalaries);
router.post("/add", authMiddleware, addSalary);
router.get("/:id", authMiddleware, getSalary);

export default router;
