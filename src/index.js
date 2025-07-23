import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import movieRoutes from "./routes/movies.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000; // process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Conectar a MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("🚀 MongoDB conectado"))
  .catch((err) => console.error("Error MongoDB:", err));

// Ruta de prueba
app.get("/", (_, res) => {
  res.send("✔ API funcionando");
});

// Ruta usuarios
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en puerto ${PORT}`);
});
