import mongoose from "mongoose";
const { Schema } = mongoose;

const videoSchema = new Schema({
  titulo: String,
  descricao: String,
  url: String,
  categoria: { type: Schema.Types.ObjectId, ref: "Categoria" },
});

const Video = mongoose.model("Video", videoSchema);

export { Video };
