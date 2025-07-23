import User from "../models/userSchema.js";

export const addToViews = async (req, res) => {
  try {
    const userId = req.user.id; // asumimos que el middleware auth ya hizo esto
    const { imdbID } = req.body;

    if (!imdbID) {
      return res.status(400).json({ error: "No se proporcionó imdbID" });
    }

    // Añadir el imdbID solo si no está repetido
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { vistas: imdbID } }, // evita duplicados
      { new: true }
    );

    res.json({ vistas: updatedUser.vistas });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al actualizar vistas" });
  }
};

export const getViews = async (req, res) => {
  try {
    const userId = req.user.id; // asumimos que el middleware auth ya hizo esto

    const user = await User.findById(userId).select("vistas");
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json({ vistas: user.vistas });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener vistas" });
  }
};
