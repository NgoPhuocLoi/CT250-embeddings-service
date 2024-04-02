import type { Request, Response } from "express";
import TextEmbeddingService from "../services/textEmbeddings";

class EmbeddingController {
  static async generateTextEmbedding(req: Request, res: Response) {
    try {
      const text = req.body.text;
      const embedding = await TextEmbeddingService.generateTextEmbedding(text);
      return res.status(200).json({ embeddings: embedding });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Error in generating text embeddings." });
    }
  }
}

export default EmbeddingController;
