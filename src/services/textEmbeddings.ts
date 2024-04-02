const TransformersApi = Function('return import("@xenova/transformers")')();

class TextEmbeddingService {
  static async generateTextEmbedding(text: string) {
    try {
      const { pipeline } = await TransformersApi;
      const textExtractor = await pipeline(
        "feature-extraction",
        "Xenova/all-MiniLM-L6-v2"
      );

      const embeddings = await textExtractor(text, {
        pooling: "mean",
        normalize: true,
      });
      console.log(embeddings);
      return Array.from(embeddings.data);
    } catch (error) {
      throw new Error("Error in generating text embeddings.");
    }
  }
}

export default TextEmbeddingService;
