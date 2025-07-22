import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 6,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    // cada String es un imdbID de película
    pendientes: [String],
    vistas: [String],
    favoritas: [String],
  },
  { timestamps: true }
);

const User = mongoose.model("Usuario", userSchema);

export default User;
