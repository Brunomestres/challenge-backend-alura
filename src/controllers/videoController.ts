import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { Video } from "../models/Video";
import { IVideos } from "../interfaces/videos";

interface IRequestID {
  id: string;
}
class VideoController {
  async get(req: Request, res: Response) {
    try {
      const videos = await Video.find();
      res.json(videos);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { titulo, descricao, url } = req.body as IVideos;
      const video = new Video({
        descricao,
        titulo,
        url,
      });

      await video.save();

      return res.status(201).json({ message: "Video created" });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const video = await Video.findById(id);
      if (!video) {
        return res.status(404).json({ message: "Video não encontrado!" });
      }
      return res.json(video);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const { titulo, descricao, url } = req.body as IVideos;
      const video = await Video.findById(id);
      if (!video) {
        return res.status(404).json({ message: "Video não encontrado!" });
      }

      video.titulo = titulo
      video.descricao = descricao
      video.url = url

      await video.save()

      return res.json({message: 'Video atualizado com sucesso!'})

    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const video = await Video.findById(id);
      if (!video) {
        return res.status(404).json({ message: "Video não encontrado!" });
      }

      await Video.deleteOne({ id })

      return res.json({message: 'Video deletado com sucesso!'})
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export { VideoController };
