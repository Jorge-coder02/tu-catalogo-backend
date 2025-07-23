import express from "express";
import { authenticate } from "../middlewares/auth.js";
import { addToViews } from "../controllers/movieController.js";

const router = express.Router();

// 🎬 Películas
router.put("/vistas", authenticate, addToViews);

export default router;
