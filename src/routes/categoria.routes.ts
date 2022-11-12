import { Router } from "express";
import { CategoriaController } from "../controllers/categoriaController";
const categoriaRouter = Router();
const categoriaController = new CategoriaController();

categoriaRouter.post("/", categoriaController.create);
categoriaRouter.get("/", categoriaController.get);
categoriaRouter.get("/:id", categoriaController.findById);
categoriaRouter.put("/:id", categoriaController.update);
categoriaRouter.delete("/:id", categoriaController.delete);
categoriaRouter.get("/:id/videos", categoriaController.getVideos);

export { categoriaRouter };
