import mongoose from 'mongoose'
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { Categoria } from "../models/Categoria";
import { Video } from "../models/Video";
import { ICategoria } from "../interfaces/Categoria";

interface IRequestID {
  id: string;
}
class CategoriaController {
  async get(req: Request, res: Response) {
    try {
      const categoria = await Categoria.find();
      res.json(categoria);
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

      const { titulo, cor } = req.body as ICategoria;
      if (!titulo) return res.status(400).json({ message: 'O titulo é obrigatório!'})
      if (!cor) return res.status(400).json({ message: 'A cor é obrigatória!'})
      const categoria = new Categoria({
        cor,
        titulo,
      });

      await categoria.save();

      return res.status(201).json({ message: "Categoria created" });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const categoria = await Categoria.findById(id);
      if (!categoria) {
        return res.status(404).json({ message: "Categoria não encontrada!" });
      }
      return res.json(categoria);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const { titulo, cor } = req.body as ICategoria;
      const video = await Categoria.findById(id);
      if (!video) {
        return res.status(404).json({ message: "Categoria não encontrada!" });
      }

      video.titulo = titulo;
      video.cor = cor;

      await video.save();

      return res.json({ message: "Categoria atualizada com sucesso!" });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const video = await Categoria.findById(id);
      if (!video) {
        return res.status(404).json({ message: "Categoria não encontrada!" });
      }

      await Categoria.deleteOne({ id });

      return res.json({ message: "Categoria deletada com sucesso!" });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
  async getVideos(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const videos = await Video.find({ categoria: id}).exec()
      if (!videos) {
        return res.status(404).json({ message: "Categoria não encontrada!" });
      }
      return res.json(videos);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export { CategoriaController };
