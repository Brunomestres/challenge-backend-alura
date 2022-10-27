import { Router } from "express";
import { body } from "express-validator";
import { VideoController } from "./controllers/videoController";
const videoController = new VideoController();
const routes = Router();

routes.get("/videos", videoController.get);
routes.post(
  "/videos",
  body("titulo").isLength({ min: 5, max: 30 }).withMessage('O titulo precisa ter no minimo 5 caracteres'),
  body("descricao").isLength({ min: 5, max: 30 }).withMessage('A descrição precisa ter no minimo 5 caracteres'),
  body("url").isURL().withMessage('A URL está inválida'),
  videoController.create
);
routes.get("/videos/:id", videoController.findById);
routes.put(
  "/videos/:id",
  body("titulo").isLength({ min: 5, max: 30 }).withMessage('O titulo precisa ter no minimo 5 caracteres'),
  body("descricao").isLength({ min: 5, max: 30 }).withMessage('A descrição precisa ter no minimo 5 caracteres'),
  body("url").isURL().withMessage('A URL está inválida'),
  videoController.update
);
routes.delete("/videos/:id", videoController.delete);

export { routes };
