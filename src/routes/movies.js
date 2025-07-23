import express from "express";
import { authenticate } from "../middlewares/auth.js";
import { addToViews, getViews } from "../controllers/movieController.js";

const router = express.Router();

// 🎬 Películas
router.get("/vistas", authenticate, getViews);
router.put("/vistas", authenticate, addToViews);

export default router;
