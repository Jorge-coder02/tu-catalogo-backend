import express from "express";
import { userLogin, userRegister } from "../controllers/usersController.js";
import { addToViews } from "../controllers/movieController.js";

const router = express.Router();

// 🙋‍♂️ Usuarios
router.post("/login", userLogin);
router.post("/register", userRegister);

export default router;
