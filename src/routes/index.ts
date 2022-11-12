import { Router } from "express";
import { routes as videoRoutes } from './video.routes'
import { categoriaRouter } from './categoria.routes'
const routes = Router();

routes.use('/videos', videoRoutes)
routes.use('/categorias', categoriaRouter)

export { routes }
