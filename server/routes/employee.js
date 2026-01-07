import express from "express";
import { getEmployees, addEmployee, getEmployee, updateEmployee, deleteEmployee } from "../controllers/employeeController.js";
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get("/", authMiddleware, getEmployees);
router.post("/add", authMiddleware, addEmployee);
router.get("/:id", authMiddleware, getEmployee);
router.put("/:id", authMiddleware, updateEmployee);
router.delete("/:id", authMiddleware, deleteEmployee);

export default router;
