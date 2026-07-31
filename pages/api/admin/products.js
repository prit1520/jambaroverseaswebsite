import { assertAdminKey, assertCloudinaryConfig, uploadProductsJson } from "../../../lib/cloudinary";
import { getProducts } from "../../../lib/products";

export default async function handler(req, res) {
  try {
    assertAdminKey(req.query.key || req.headers["x-admin-key"]);
    if (req.method === "GET") return res.status(200).json(await getProducts());
    if (req.method === "DELETE") {
      assertCloudinaryConfig();
      const { id } = req.body || {};
      if (!id) return res.status(400).json({ error: "Product ID is required" });
      const products = await getProducts();
      const next = products.filter((product) => product.id !== id);
      if (next.length === products.length) return res.status(404).json({ error: "Product not found" });
      await uploadProductsJson(next);
      return res.status(200).json({ message: "Product deleted", count: next.length });
    }
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    assertCloudinaryConfig();
    const products = req.body;
    if (!Array.isArray(products)) return res.status(400).json({ error: "Request body must be a product array" });
    await uploadProductsJson(products);
    return res.status(200).json({ message: "Products published to Cloudinary", count: products.length });
  } catch (error) {
    console.error("Product publish failed", error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}
