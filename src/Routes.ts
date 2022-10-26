import {Router } from 'express'
import { VideoController } from './controllers/videoController'
const videoController = new VideoController()
const routes = Router()

routes.get('/videos', videoController.get)
routes.post('/videos', videoController.create)

export { routes }