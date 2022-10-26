import { Request, Response } from "express";
import { Video } from "../models/Video";
import { IVideos } from "../interfaces/videos";
class VideoController {
  async get(req: Request, res: Response) {
    try {
      const videos = await Video.find()
      res.json(videos);
    } catch (error) {
      return res.status(400).json({message: error})
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { titulo, descricao, url } = req.body as IVideos;
      const video = new Video({
        descricao,
        titulo,
        url,
      });
  
      await video.save();
  
      return res.status(201).json({ message: "Video created" });
    } catch (error) {
      return res.status(400).json({message: error})
    }
  }
}

export { VideoController };
