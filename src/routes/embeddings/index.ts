import express from "express";
import EmbeddingController from "../../controllers/embeddings";
const router = express.Router();

router.post("/text", EmbeddingController.generateTextEmbedding);

export default router;
