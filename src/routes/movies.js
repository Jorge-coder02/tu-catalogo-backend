import express from "express";
import { authenticate } from "../middlewares/auth.js";
import {
  addToViews,
  getViews,
  removeFromViews,
} from "../controllers/movieController.js";

const router = express.Router();

// 🎬 Películas
router.get("/vistas", authenticate, getViews);
router.put("/vistas", authenticate, addToViews);
router.delete("/vistas", authenticate, removeFromViews);

export default router;
