import express from "express";
import EmbeddingController from "../../controllers/embeddings";
const router = express.Router();

router.post("/text", EmbeddingController.generateTextEmbedding);
router.post("/image", EmbeddingController.generateImageEmbedding);

export default router;
