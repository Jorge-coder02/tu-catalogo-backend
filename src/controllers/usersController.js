import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "clave_secreta_para_tests";

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    // ❌ Validación de usuario
    if (!user) {
      return res.status(400).json({ message: "Datos incorrectos" });
    }

    // ✅ Generar token
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "2h",
    });
    // Enviar usuario (sin contraseña) + token
    user.password = undefined;
    // const { password: _, ...userData } = user.toObject();

    res.status(200).json({
      message: "Inicio de sesión exitoso",
      user,
      token,
    });
  } catch (error) {
    console.error("Error en userLogin:", error);
    res
      .status(500)
      .json({ message: "Error al iniciar sesión", error: error.message });
  }
};

export const userRegister = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    // Comprobar si el email ya está registrado
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email ya registrado" });
    }
    // Comprobar si el nombre de usuario ya está en uso
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res
        .status(400)
        .json({ message: "Nombre de usuario ya registrado" });
    }

    const newUser = await User.create({ email, password, username });
    res.status(201).json({ message: "Registro exitoso", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar usuario", error });
  }
};
