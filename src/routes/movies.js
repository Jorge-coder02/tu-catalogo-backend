import express from "express";
import { authenticate } from "../middlewares/auth.js";
import {
  addToViews,
  getViews,
  removeFromViews,
  addToWatchlist,
  removeFromPendientes,
} from "../controllers/movieController.js";

const router = express.Router();

// 🎬 Películas
// 👀 Vistas
router.get("/vistas", authenticate, getViews);
router.put("/vistas", authenticate, addToViews);
router.delete("/vistas", authenticate, removeFromViews);

// 🕐 Pendientes
router.put("/pendientes", authenticate, addToWatchlist);
router.delete("/pendientes", authenticate, removeFromPendientes);

export default router;
