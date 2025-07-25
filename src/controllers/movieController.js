import User from "../models/userSchema.js";

export const addToWatchlist = async (req, res) => {
  try {
    const userId = req.user.id; // asumimos que el middleware auth ya hizo esto
    const { imdbID } = req.body;

    if (!imdbID) {
      return res.status(400).json({ error: "No se proporcionó imdbID" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // ❌ Verificar si ya está en vistas
    if (user.pendientes.includes(imdbID)) {
      return res.status(200).json({
        message: "La película ya está en pendientes",
        alreadyAdded: true,
        pendientes: user.pendientes,
      });
    }

    // ✅ Agregar si no está
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { pendientes: imdbID } },
      { new: true }
    );

    res.status(200).json({
      message: "Película añadida a pendientes",
      alreadyAdded: false,
      pendientes: updatedUser.pendientespendientes,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al actualizar vistas" });
  }
};

export const removeFromPendientes = async (req, res) => {
  try {
    const userId = req.user.id; // asumimos que el middleware auth ya hizo esto
    const { imdbID } = req.body;

    if (!imdbID) {
      return res.status(400).json({ error: "No se proporcionó imdbID" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // ❌ Verificar si no está en pendientes
    if (!user.pendientes.includes(imdbID)) {
      return res.status(200).json({
        message: "La película no está en vistas",
        alreadyRemoved: true,
        pendientes: user.pendientes,
      });
    }

    // ✅ Quitar si está
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $pull: { pendientes: imdbID } },
      { new: true }
    );

    res.status(200).json({
      message: "Película eliminada de pendientes",
      alreadyRemoved: false,
      pendientes: updatedUser.pendientes,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al eliminar pendientes" });
  }
};

export const addToViews = async (req, res) => {
  try {
    const userId = req.user.id; // asumimos que el middleware auth ya hizo esto
    const { imdbID } = req.body;

    if (!imdbID) {
      return res.status(400).json({ error: "No se proporcionó imdbID" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // ❌ Verificar si ya está en vistas
    if (user.vistas.includes(imdbID)) {
      return res.status(200).json({
        message: "La película ya está en vistas",
        alreadyAdded: true,
        vistas: user.vistas,
      });
    }

    // ✅ Agregar si no está
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { vistas: imdbID } },
      { new: true }
    );

    res.status(200).json({
      message: "Película añadida a vistas",
      alreadyAdded: false,
      vistas: updatedUser.vistas,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al actualizar vistas" });
  }
};

export const removeFromViews = async (req, res) => {
  try {
    const userId = req.user.id; // asumimos que el middleware auth ya hizo esto
    const { imdbID } = req.body;

    if (!imdbID) {
      return res.status(400).json({ error: "No se proporcionó imdbID" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // ❌ Verificar si no está en vistas
    if (!user.vistas.includes(imdbID)) {
      return res.status(200).json({
        message: "La película no está en vistas",
        alreadyRemoved: true,
        vistas: user.vistas,
      });
    }

    // ✅ Quitar si está
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $pull: { vistas: imdbID } },
      { new: true }
    );

    res.status(200).json({
      message: "Película eliminada de vistas",
      alreadyRemoved: false,
      vistas: updatedUser.vistas,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al eliminar vistas" });
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
