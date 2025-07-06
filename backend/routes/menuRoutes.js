import express from "express";
import {
  getMenu,
  createMenuItem,
  deleteMenuItem,
  updateMenuItem,
} from "../controllers/menuController.js";

const router = express.Router();

router.get("/", getMenu);
router.post("/", createMenuItem);
router.delete("/:id", deleteMenuItem);
router.put("/:id", updateMenuItem);

export default router;
