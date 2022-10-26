import mongoose from "mongoose";
const { Schema } = mongoose;

const videoSchema = new Schema({
  titulo: String,
  descricao: String,
  url: String,
});

const Video = mongoose.model("Video", videoSchema);

export { Video };
