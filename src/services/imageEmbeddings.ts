const TransformersApi = Function('return import("@xenova/transformers")')();
class ImageEmbeddingService {
  static async generateImageEmbeddingFromUrl(imageUrl: string) {
    try {
      const { pipeline } = await TransformersApi;
      const image_feature_extractor = await pipeline(
        "image-feature-extraction",
        "Xenova/clip-vit-base-patch32"
      );

      const features = await image_feature_extractor(imageUrl);

      return Array.from(features.data);
    } catch (error) {
      throw new Error("Error in generating image embeddings.");
    }
  }
}

export default ImageEmbeddingService;
