import mongoose from "mongoose";
const { Schema } = mongoose;

const categoriaSchema = new Schema({
  titulo: String,
  cor: String
});

const Categoria = mongoose.model("Categoria", categoriaSchema);

export { Categoria };
