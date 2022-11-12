import { Router } from "express";
import { body } from "express-validator";
import { VideoController } from "../controllers/videoController";
const videoController = new VideoController();
const routes = Router();

routes.get("/", videoController.get);
routes.post(
  "/",
  body("titulo")
    .isLength({ min: 5, max: 30 })
    .withMessage("O titulo precisa ter no minimo 5 caracteres"),
  body("descricao")
    .isLength({ min: 5, max: 30 })
    .withMessage("A descrição precisa ter no minimo 5 caracteres"),
  body("url").isURL().withMessage("A URL está inválida"),
  videoController.create
);
routes.get("/:id", videoController.findById);
routes.put(
  "/:id",
  body("titulo")
    .isLength({ min: 5, max: 30 })
    .withMessage("O titulo precisa ter no minimo 5 caracteres"),
  body("descricao")
    .isLength({ min: 5, max: 30 })
    .withMessage("A descrição precisa ter no minimo 5 caracteres"),
  body("url").isURL().withMessage("A URL está inválida"),
  videoController.update
);
routes.delete("/:id", videoController.delete);

export { routes };
