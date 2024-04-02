import express from "express";
const router = express.Router();

import embeddingsRouter from "./embeddings";

router.use("/embeddings", embeddingsRouter);

export default router;
